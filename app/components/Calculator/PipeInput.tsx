'use client';

import { Card, CardBody, CardHeader, Button, ButtonGroup, Input } from '@nextui-org/react';
import NumberInput from '../UI/NumberInput';
import type { Pipe } from '@/app/types';

interface PipeInputProps {
  pipe: Pipe;
  pressureLoss?: number;
  onChange: (id: string, updates: Partial<Pipe>) => void;
  onRemove?: () => void;
  onInsertBefore: () => void;
  onInsertAfter: () => void;
  showRemove: boolean;
}

export default function PipeInput({ 
  pipe, 
  pressureLoss,
  onChange, 
  onRemove, 
  onInsertBefore,
  onInsertAfter,
  showRemove 
}: PipeInputProps) {
  const handleChange = (name: string, value: any) => {
    onChange(pipe.id, { [name]: value });
  };

  return (
    <Card className="border-1 border-default-200/50 shadow-md rounded-2xl">
      <CardHeader className="flex flex-col gap-4 px-6 pt-6 rounded-t-2xl">
        <div className="w-full flex justify-between items-center">
          <h3 className="text-xl font-semibold">{pipe.name}</h3>
          <ButtonGroup size="sm" className="gap-1">
            <Button
              onClick={onInsertBefore}
              variant="flat"
              className="min-w-[80px] h-[36px] rounded-lg"
              aria-label="前に配管を追加"
            >
              前に追加
            </Button>
            <Button
              onClick={onInsertAfter}
              variant="flat"
              className="min-w-[80px] h-[36px] rounded-lg"
              aria-label="後ろに配管を追加"
            >
              後に追加
            </Button>
            {showRemove && (
              <Button
                onClick={onRemove}
                color="danger"
                variant="flat"
                className="min-w-[60px] h-[36px] rounded-lg"
                aria-label="この配管を削除"
              >
                削除
              </Button>
            )}
          </ButtonGroup>
        </div>
      </CardHeader>

      <CardBody className="px-6 py-4">
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="図番（任意）"
              placeholder="例: DWG-001"
              value={pipe.drawingNumber || ''}
              onChange={(e) => handleChange('drawingNumber', e.target.value)}
              variant="bordered"
              labelPlacement="outside"
              radius="lg"
              classNames={{
                input: "rounded-lg",
                label: "text-default-600",
                inputWrapper: "shadow-sm rounded-lg",
              }}
            />
            <Input
              label="区間名（任意）"
              placeholder="例: A-B"
              value={pipe.sectionName || ''}
              onChange={(e) => handleChange('sectionName', e.target.value)}
              variant="bordered"
              labelPlacement="outside"
              radius="lg"
              classNames={{
                input: "rounded-lg",
                label: "text-default-600",
                inputWrapper: "shadow-sm rounded-lg",
              }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <NumberInput
                label="配管直径 (m)"
                value={pipe.diameter}
                onChange={(value) => handleChange('diameter', value)}
                min={0.01}
                max={1}
                step={0.01}
              />
              <NumberInput
                label="配管長さ (m)"
                value={pipe.length}
                onChange={(value) => handleChange('length', value)}
                min={0.1}
                max={1000}
                step={0.1}
              />
            </div>

            <div className="space-y-4">
              <NumberInput
                label="流量 (m³/s)"
                value={pipe.flowRate}
                onChange={(value) => handleChange('flowRate', value)}
                min={0.0001}
                max={0.1}
                step={0.0001}
              />
              <NumberInput
                label="流体密度 (kg/m³)"
                value={pipe.density}
                onChange={(value) => handleChange('density', value)}
                min={1}
                max={2000}
                step={1}
              />
            </div>

            <div className="space-y-4">
              <NumberInput
                label="管壁粗さ (m)"
                value={pipe.roughness}
                onChange={(value) => handleChange('roughness', value)}
                min={0.00001}
                max={0.001}
                step={0.00001}
              />
              <NumberInput
                label="動粘性係数 (Pa·s)"
                value={pipe.viscosity}
                onChange={(value) => handleChange('viscosity', value)}
                min={0.0001}
                max={0.01}
                step={0.0001}
              />
            </div>
          </div>

          {pressureLoss !== undefined && (
            <>
              <div className="h-px bg-divider w-full" />
              <div className="flex justify-between items-center bg-default-50 p-4 rounded-xl">
                <span className="text-lg font-semibold">圧力損失</span>
                <span className="text-lg font-bold">{pressureLoss.toFixed(2)} Pa</span>
              </div>
            </>
          )}
        </div>
      </CardBody>
    </Card>
  );
}