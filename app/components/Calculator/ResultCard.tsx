'use client';

import { Card, CardBody, CardHeader } from '@nextui-org/react';
import type { Pipe } from '@/app/types';

interface ResultCardProps {
  pipe: Pipe;
  pressureLoss: number;
}

export default function ResultCard({ pipe, pressureLoss }: ResultCardProps) {
  return (
    <Card className="border-1 border-default-200/50 shadow-md rounded-2xl">
      <CardHeader className="px-6 py-4 rounded-t-2xl">
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold">{pipe.name}</h3>
          {(pipe.drawingNumber || pipe.sectionName) && (
            <span className="text-small text-default-400">
              {[pipe.drawingNumber, pipe.sectionName].filter(Boolean).join(' / ')}
            </span>
          )}
        </div>
      </CardHeader>
      <CardBody className="px-6 py-4">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-default-500">配管直径</p>
              <p className="font-semibold">{pipe.diameter} m</p>
            </div>
            <div>
              <p className="text-default-500">配管長さ</p>
              <p className="font-semibold">{pipe.length} m</p>
            </div>
            <div>
              <p className="text-default-500">流量</p>
              <p className="font-semibold">{pipe.flowRate} m³/s</p>
            </div>
            <div>
              <p className="text-default-500">流体密度</p>
              <p className="font-semibold">{pipe.density} kg/m³</p>
            </div>
          </div>
          <div className="h-px bg-divider w-full" />
          <div className="flex justify-between items-center">
            <span className="text-lg">圧力損失</span>
            <span className="text-lg font-bold">{pressureLoss.toFixed(2)} Pa</span>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}