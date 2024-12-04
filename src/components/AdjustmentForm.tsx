"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/button";

interface AdjustmentFormProps {
  scaleIndex: number;
  setScaleIndex: React.Dispatch<React.SetStateAction<number>>;
  opacityIndex: number;
  setOpacityIndex: React.Dispatch<React.SetStateAction<number>>;
  variationIndex: number;
  setVariationIndex: React.Dispatch<React.SetStateAction<number>>;
}
export default function AdjustmentForm({
  scaleIndex,
  setScaleIndex,
  opacityIndex,
  setOpacityIndex,
  variationIndex,
  setVariationIndex,
}: AdjustmentFormProps) {
  const resetValues = () => {
    setScaleIndex(1);
    setOpacityIndex(0);
    setVariationIndex(0);
  };
  return (
    <Card className="w-1/3 min-w-md mx-auto my-8 max-h-fit sticky">
      <CardHeader>
        <CardTitle>Adjust Parameters</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <label
            htmlFor="scale-slider"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Scale: {scaleIndex.toFixed(1)}
          </label>
          <Slider
            id="scale-slider"
            min={0}
            max={10}
            step={0.1}
            value={[scaleIndex]}
            onValueChange={(value) => setScaleIndex(value[0])}
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="opacity-slider"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Opacity: {opacityIndex}%
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
        <div className="space-y-2">
          <label
            htmlFor="variation-slider"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Size Variation: {variationIndex.toFixed(2)}
          </label>
          <Slider
            id="variation-slider"
            min={-10}
            max={10}
            step={0.01}
            value={[variationIndex]}
            onValueChange={(value) => setVariationIndex(value[0])}
          />
        </div>
        <Button onClick={resetValues} className="w-full">
          Reset
        </Button>
      </CardContent>
    </Card>
  );
}
