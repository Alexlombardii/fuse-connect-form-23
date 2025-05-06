
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface EmailInputFormProps {
  email: string;
  setEmail: (email: string) => void;
  isValidEmail: boolean;
  onSubmit: (e: React.FormEvent) => void;
}

const EmailInputForm = ({ email, setEmail, isValidEmail, onSubmit }: EmailInputFormProps) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Connect with Fuse Energy</h2>
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-gray-700">
          Email Address
        </label>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`focus:border-fuse focus:ring-fuse ${!isValidEmail ? 'border-red-500' : ''}`}
        />
        {!isValidEmail && (
          <p className="text-red-500 text-sm mt-1">Please enter a valid email address</p>
        )}
      </div>
      <Button 
        type="submit" 
        className="w-full bg-fuse hover:bg-fuse-dark text-white"
      >
        Continue
      </Button>
    </form>
  );
};

export default EmailInputForm;
