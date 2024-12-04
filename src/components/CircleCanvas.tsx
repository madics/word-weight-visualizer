import React, { useEffect, useState } from "react";
import { Card } from "./ui/card";

interface CircleVisualizerProps {
  wordMap: { [key: string]: number };
  scaleIndex: number;
  opacityIndex: number;
  variationIndex: number;
  minWordCount: number;
  maxWordCount: number;
}

const CircleVisualizer = ({
  wordMap,
  scaleIndex,
  opacityIndex,
  variationIndex,
  minWordCount,
  maxWordCount,
}: CircleVisualizerProps) => {
  useEffect(() => {
    console.log(maxWordCount);
  }, [maxWordCount]);

  return (
    <Card className="my-8 w-full flex items-center p-2 h-fit max-h-screen min-h-96 overflow-scroll">
      <div className="flex flex-wrap justify-center  w-full h-fit text-wrap">
        {Object.entries(wordMap).map(([word, count]) => {
          const size = Math.min(count * 6, 80); // Limit the max size to 200px
          return (
            <div
              key={word}
              className="flex items-center  justify-center mx-1 w-fit h-fit px-1 my-auto max-h-fit"
              style={{
                //width: `${size}px`,
                //height: `${size}px`,
                //borderRadius: "50%",
                //backgroundColor: "#3498db",
                color: "black",
                fontWeight: "bold",
                opacity: `${opacityIndex > size ? 0.1 * (size / 6) : 1}`,
                fontSize: `${
                  14 *
                  Math.pow(
                    (count - (minWordCount - 1)) /
                      (maxWordCount - (minWordCount - 1)) +
                      0.5,
                    variationIndex
                  ) *
                  scaleIndex
                }px`, //"14px",
                lineHeight: "1", // `${scaleIndex * 0.01}`, , // Compresses text within its bounding box
              }}
            >
              {word}
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default CircleVisualizer;
