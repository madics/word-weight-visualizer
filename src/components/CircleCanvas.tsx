import React, { useState } from "react";

interface CircleVisualizerProps {
  wordMap: { [key: string]: number };
  scaleIndex: number;
  opacityIndex: number;
}

const CircleVisualizer = ({
  wordMap,
  scaleIndex,
  opacityIndex,
}: CircleVisualizerProps) => {
  return (
    <div className="flex flex-wrap justify-center p-9 ">
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
              opacity: `${0.1 + size * 0.05}`,
              fontSize: `${size / scaleIndex}px`, //"14px",
              lineHeight: `${scaleIndex * 0.01}`, //"0.1", // Compresses text within its bounding box
            }}
          >
            {word}
          </div>
        );
      })}
    </div>
  );
};

export default CircleVisualizer;
