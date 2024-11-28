import React, { useState } from "react";

interface CircleProps {
  value: number;
  onClick: (value: number) => void;
}

const Circle: React.FC<CircleProps> = ({ value, onClick }) => {
  const diameter = value * 10; // The value affects the diameter (value * 10 is an example scaling)

  return (
    <div
      onClick={() => onClick(value)}
      className="flex justify-center items-center cursor-pointer"
      style={{
        width: `${diameter}px`,
        height: `${diameter}px`,
        borderRadius: "50%",
        backgroundColor: "#3498db", // You can change the color
      }}
    >
      <span className="text-white">{value}</span>
    </div>
  );
};

interface CircleVisualizerProps {
  wordMap: { [key: string]: number };
}

const CircleVisualizer = ({ wordMap }: CircleVisualizerProps) => {
  return (
    <div className="flex flex-wrap justify-center">
      {Object.entries(wordMap).map(([word, count]) => {
        const size = Math.min(count * 20, 200); // Limit the max size to 200px
        return (
          <div
            key={word}
            className="flex items-center justify-center m-2"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              borderRadius: "50%",
              backgroundColor: "#3498db",
              color: "white",
              fontSize: "14px",
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
