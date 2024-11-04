'use client';

import { Input } from "@nextui-org/react";

interface NumberInputProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
}

export default function NumberInput({
  label,
  value,
  onChange,
  min,
  max,
  step = 0.1
}: NumberInputProps) {
  return (
    <Input
      type="number"
      label={label}
      value={value.toString()}
      onChange={(e) => onChange(parseFloat(e.target.value))}
      min={min}
      max={max}
      step={step}
      variant="bordered"
      labelPlacement="outside"
      radius="lg"
      classNames={{
        input: "text-right rounded-lg",
        label: "text-default-600",
        inputWrapper: "shadow-sm rounded-lg",
        innerWrapper: "rounded-lg",
        mainWrapper: "rounded-lg",
        base: "rounded-lg"
      }}
    />
  );
}