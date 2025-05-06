
import React from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface CompletionMessageProps {
  onStartOver: () => void;
}

const CompletionMessage = ({ onStartOver }: CompletionMessageProps) => {
  return (
    <div className="space-y-6 text-center py-8">
      <div className="flex justify-center mb-6">
        <div className="bg-fuse text-white rounded-full p-4">
          <Check size={48} />
        </div>
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h2>
      <p className="text-gray-600 mb-6">Your submission has been completed successfully.</p>
      
      <Button 
        onClick={onStartOver}
        className="bg-fuse hover:bg-fuse-dark text-white"
      >
        Start Over
      </Button>
    </div>
  );
};

export default CompletionMessage;
