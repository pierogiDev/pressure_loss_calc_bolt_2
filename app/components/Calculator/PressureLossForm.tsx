'use client';

import { useState, useEffect } from 'react';
import { Button, Card, CardBody } from '@nextui-org/react';
import { calculatePressureLoss } from '@/app/utils/calculations';
import PipeInput from './PipeInput';
import type { Pipe } from '@/app/types';

const defaultPipe: Pipe = {
  id: '1',
  name: '配管 1',
  diameter: 0.1,
  length: 10,
  flowRate: 0.001,
  roughness: 0.00015,
  viscosity: 0.001,
  density: 1000,
};

export default function PressureLossForm() {
  const [pipes, setPipes] = useState<Pipe[]>([{ ...defaultPipe }]);
  const [results, setResults] = useState<{ [key: string]: number }>({});

  const createNewPipe = (index: number): Pipe => ({
    ...defaultPipe,
    id: Date.now().toString(),
    name: `配管 ${index + 1}`,
  });

  const handleInsertPipe = (index: number) => {
    const newPipes = [...pipes];
    newPipes.splice(index, 0, createNewPipe(index));
    for (let i = index + 1; i < newPipes.length; i++) {
      newPipes[i] = { 
        ...newPipes[i], 
        name: `配管 ${i + 1}`,
      };
    }
    setPipes(newPipes);
  };

  const handleRemovePipe = (id: string) => {
    const index = pipes.findIndex(pipe => pipe.id === id);
    const newPipes = pipes.filter(pipe => pipe.id !== id);
    for (let i = index; i < newPipes.length; i++) {
      newPipes[i] = { 
        ...newPipes[i], 
        name: `配管 ${i + 1}`,
      };
    }
    setPipes(newPipes);
    const newResults = { ...results };
    delete newResults[id];
    setResults(newResults);
  };

  const handlePipeChange = (id: string, updates: Partial<Pipe>) => {
    setPipes(pipes.map(pipe => 
      pipe.id === id ? { ...pipe, ...updates } : pipe
    ));
  };

  useEffect(() => {
    const newResults = pipes.reduce((acc, pipe) => {
      try {
        acc[pipe.id] = calculatePressureLoss(pipe);
      } catch (error) {
        acc[pipe.id] = 0;
      }
      return acc;
    }, {} as { [key: string]: number });
    
    setResults(newResults);
  }, [pipes]);

  const totalPressureLoss = Object.values(results).reduce((sum, value) => sum + value, 0);

  return (
    <div className="space-y-8">
      {pipes.map((pipe, index) => (
        <PipeInput
          key={pipe.id}
          pipe={pipe}
          pressureLoss={results[pipe.id]}
          onChange={handlePipeChange}
          onRemove={() => handleRemovePipe(pipe.id)}
          onInsertBefore={() => handleInsertPipe(index)}
          onInsertAfter={() => handleInsertPipe(index + 1)}
          showRemove={pipes.length > 1}
        />
      ))}

      {Object.keys(results).length > 0 && (
        <Card className="border-1 border-primary-200/50 shadow-md rounded-2xl bg-primary-50/30">
          <CardBody className="p-6">
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold">合計圧力損失</span>
              <span className="text-xl font-bold">{totalPressureLoss.toFixed(2)} Pa</span>
            </div>
          </CardBody>
        </Card>
      )}
    </div>
  );
}