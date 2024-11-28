"use client";
import DefaultLayout from "@/app/layouts/DefaultLayout";
import CircleVisualizer from "@/components/CircleCanvas";
import InputForm from "@/components/InputForm";
import { useState } from "react";

const HomePage = () => {
  const [textInput, setTextInput] = useState<string>("");
  const [wordMap, setWordMap] = useState<{ [key: string]: number }>({});

  // Function to count words and update wordMap
  const countWords = (text: string) => {
    const words = text.toLowerCase().split(/\s+/); // Split by whitespace and make lowercase
    const map: { [key: string]: number } = {};

    words.forEach((word) => {
      if (word) {
        map[word] = (map[word] || 0) + 1; // Increment word count in map
      }
    });

    return map;
  };

  // Handle form submission
  const handleFormSubmit = (inputText: string) => {
    const newWordMap = countWords(inputText); // Count words on submit
    setWordMap(newWordMap); // Update word map
  };

  return (
    <DefaultLayout>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold">
          Welcome to the Word Weight Visualizer!
        </h2>
        <p>This is where the magic happens!</p>
      </div>
      <div className="w-full flex flex-row space-x-8">
        <InputForm
          inputText={textInput}
          setInputText={setTextInput}
          onSubmit={handleFormSubmit} // Pass the form submit handler
        />
        <CircleVisualizer wordMap={wordMap} />{" "}
        {/* Pass wordMap to CircleVisualizer */}
      </div>
    </DefaultLayout>
  );
};

export default HomePage;
