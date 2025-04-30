
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { ExternalLink } from "lucide-react";

const EmailForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const { toast } = useToast();

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setIsValidEmail(false);
      toast({
        title: "Email Required",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }

    if (!validateEmail(email)) {
      setIsValidEmail(false);
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsValidEmail(true);
    setIsSubmitted(true);
    toast({
      title: "Email Submitted",
      description: "Please continue with the available options below.",
    });
  };

  // Extract username from email (everything before @)
  const getUsername = (email: string) => {
    return email.split('@')[0];
  };

  return (
    <Card className="w-full max-w-md p-6 shadow-lg bg-white">
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
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
      ) : (
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Next Steps</h2>
            <p className="text-gray-600 mb-6">Please choose one of the following options</p>
          </div>
          
          <div className="space-y-4">
            <a 
              href="https://docs.google.com/forms/d/145aS0Va3Z02U5sBjkQcm54iLtRmsRROuj6y2E3M3GrA/edit"
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              <Button 
                className="w-full bg-fuse hover:bg-fuse-dark text-white flex items-center justify-between"
              >
                <span>Fill out the form</span>
                <ExternalLink size={16} />
              </Button>
            </a>
            
            <a 
              href={`http://fuseenergy.com/enode/${getUsername(email)}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              <Button 
                className="w-full bg-fuse hover:bg-fuse-dark text-white flex items-center justify-between"
              >
                <span>Connect your home devices</span>
                <ExternalLink size={16} />
              </Button>
            </a>
            
            <Button 
              variant="outline"
              onClick={() => setIsSubmitted(false)}
              className="w-full border-fuse text-fuse hover:bg-fuse/10"
            >
              Go back
            </Button>
          </div>
        </div>
      )}
    </Card>
  );
};

export default EmailForm;
