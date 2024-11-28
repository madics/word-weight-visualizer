import React, { ReactNode } from "react";
import Navbar from "./Navbar";

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <Navbar />
      <main className="flex-1 p-6 w-5/6 h-full mx-auto">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4">
        <p>&copy; 2024 Word Weight Visualizer. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default DefaultLayout;
