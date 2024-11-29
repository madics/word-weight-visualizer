"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface AdjustmentFormProps {
  scaleIndex: number;
  setScaleIndex: React.Dispatch<React.SetStateAction<number>>;
  opacityIndex: number;
  setOpacityIndex: React.Dispatch<React.SetStateAction<number>>;
}
export default function AdjustmentForm({
  scaleIndex,
  setScaleIndex,
  opacityIndex,
  setOpacityIndex,
}: AdjustmentFormProps) {
  return (
    <Card className="w-full max-w-md mx-auto m-8">
      <CardHeader>
        <CardTitle>Adjust Parameters</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <label
            htmlFor="scale-slider"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Scale Index: {scaleIndex.toFixed(2)}
          </label>
          <Slider
            id="scale-slider"
            min={0}
            max={2}
            step={0.01}
            value={[scaleIndex]}
            onValueChange={(value) => setScaleIndex(value[0])}
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="opacity-slider"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Opacity Index: {opacityIndex}%
          </label>
          <Slider
            id="opacity-slider"
            min={0}
            max={100}
            step={1}
            value={[opacityIndex]}
            onValueChange={(value) => setOpacityIndex(value[0])}
          />
        </div>
      </CardContent>
    </Card>
  );
}
