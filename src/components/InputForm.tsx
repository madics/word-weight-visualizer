"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface InputFormProps {
  inputText: string;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: (inputText: string) => void; // Add onSubmit as a prop
}

const InputForm = ({ inputText, setInputText, onSubmit }: InputFormProps) => {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setFileName(file ? file.name : null);
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(inputText); // Call onSubmit passed from the parent
  };

  return (
    <form
      className="w-full mx-auto mt-8 p-6 bg-white rounded-lg shadow-md min-w-md"
      onSubmit={handleSubmit}
    >
      <div className="space-y-4">
        <div>
          <Label
            htmlFor="message"
            className="text-sm font-medium text-gray-700"
          >
            Your Message
          </Label>
          <Textarea
            id="message"
            placeholder="Type your message here..."
            className="mt-1 block w-full"
            rows={4}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)} // Update inputText state on change
          />
        </div>

        <div>
          <Label htmlFor="file" className="text-sm font-medium text-gray-700">
            Upload File
          </Label>
          <div className="mt-1 flex items-center">
            <label
              htmlFor="file"
              className="flex items-center justify-center w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer"
            >
              <Upload
                className="mr-2 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              <span>{fileName || "Choose a file"}</span>
              <input
                id="file"
                name="file"
                type="file"
                className="sr-only"
                onChange={handleFileChange}
              />
            </label>
          </div>
        </div>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </motion.div>
      </div>
    </form>
  );
};

export default InputForm;
