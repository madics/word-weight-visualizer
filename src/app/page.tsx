"use client";
import DefaultLayout from "@/app/layouts/DefaultLayout";
import AdjustmentForm from "@/components/AdjustmentForm";
import CircleVisualizer from "@/components/CircleCanvas";
import InputForm from "@/components/InputForm";
import { useState } from "react";

const HomePage = () => {
  const [textInput, setTextInput] = useState<string>("");
  const [wordMap, setWordMap] = useState<{ [key: string]: number }>({});
  const [scaleIndex, setScaleIndex] = useState(0.5);
  const [opacityIndex, setOpacityIndex] = useState(0);
  const [variationIndex, setVariationIndex] = useState(1);
  const [minWordCount, setMinWordCount] = useState(1);
  const [maxWordCount, setMaxWordCount] = useState(1);
  // Function to count words and update wordMap
  const countWords = (text: string) => {
    const map: { [key: string]: number } = {};
    const words = text.toLowerCase().split(/\s+/); // Split by whitespace and make lowercase
    words.forEach((word) => {
      if (word) {
        map[word] = (map[word] || 0) + 1; // Increment word count in map
        if (map[word] > maxWordCount) setMaxWordCount(map[word]);
        else if (map[word] < minWordCount) setMinWordCount(map[word]);
      }
    });
    console.log(minWordCount, maxWordCount);
    return map;
  };

  // Handle form submission
  const handleFormSubmit = (inputText: string) => {
    const newWordMap = countWords(inputText); // Count words on submit
    setWordMap(newWordMap); // Update word map
    console.log(wordMap.size == 0);
  };

  return (
    <DefaultLayout>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold">
          Welcome to the Word Weight Visualizer!
        </h2>
        <p>This is where the magic happens!</p>
      </div>
      <div className="w-full flex flex-col ">
        <InputForm
          inputText={textInput}
          setInputText={setTextInput}
          onSubmit={handleFormSubmit} // Pass the form submit handler
        />
        {Object.keys(wordMap).length > 0 && (
          <div className="flex flex-row h-fit space-x-8 ">
            <CircleVisualizer
              wordMap={wordMap}
              opacityIndex={opacityIndex}
              scaleIndex={scaleIndex}
              variationIndex={variationIndex}
              maxWordCount={maxWordCount}
              minWordCount={minWordCount}
            />
            <AdjustmentForm
              setOpacityIndex={setOpacityIndex}
              setScaleIndex={setScaleIndex}
              scaleIndex={scaleIndex}
              opacityIndex={opacityIndex}
              variationIndex={variationIndex}
              setVariationIndex={setVariationIndex}
            />
          </div>
        )}
      </div>
    </DefaultLayout>
  );
};

export default HomePage;
