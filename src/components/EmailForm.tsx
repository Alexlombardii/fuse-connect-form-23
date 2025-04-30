
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { ExternalLink, Check } from "lucide-react";

const EmailForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isCompleted, setIsCompleted] = useState(false);
  const [step1Clicked, setStep1Clicked] = useState(false);
  const [step2Clicked, setStep2Clicked] = useState(false);
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

  const handleComplete = () => {
    // Create confetti effect
    const createConfetti = () => {
      const confettiCount = 100;
      const colors = ['#F8632C', '#FFD700', '#87CEFA', '#FF69B4', '#32CD32'];
      
      for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
        confetti.style.opacity = `${Math.random()}`;
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        
        document.body.appendChild(confetti);
        
        setTimeout(() => {
          document.body.removeChild(confetti);
        }, 5000);
      }
    };
    
    createConfetti();
    setIsCompleted(true);
    toast({
      title: "Thank You!",
      description: "Your submission is complete.",
    });
  };

  // Check if both steps are completed
  const bothStepsCompleted = step1Clicked && step2Clicked;

  return (
    <Card className="w-full max-w-md p-6 shadow-lg bg-white relative">
      <style>
        {`
          .confetti {
            position: fixed;
            width: 10px;
            height: 10px;
            z-index: 1000;
            animation: fall linear forwards;
          }
          
          @keyframes fall {
            0% { transform: translateY(0) rotate(0deg); opacity: 1; }
            100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
          }
        `}
      </style>
      
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
      ) : isCompleted ? (
        <div className="space-y-6 text-center py-8">
          <div className="flex justify-center mb-6">
            <div className="bg-fuse text-white rounded-full p-4">
              <Check size={48} />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h2>
          <p className="text-gray-600 mb-6">Your submission has been completed successfully.</p>
          
          <Button 
            onClick={() => {
              setIsSubmitted(false);
              setIsCompleted(false);
              setStep1Clicked(false);
              setStep2Clicked(false);
            }}
            className="bg-fuse hover:bg-fuse-dark text-white"
          >
            Start Over
          </Button>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Next Steps</h2>
            <p className="text-gray-600 mb-6">Please complete the following steps</p>
          </div>
          
          <div className="space-y-4">
            <a 
              href="https://docs.google.com/forms/d/145aS0Va3Z02U5sBjkQcm54iLtRmsRROuj6y2E3M3GrA/edit"
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
              onClick={() => setStep1Clicked(true)}
            >
              <Button 
                className={`w-full ${step1Clicked ? 'bg-green-600 hover:bg-green-700' : 'bg-fuse hover:bg-fuse-dark'} text-white flex items-center justify-between`}
              >
                <div className="flex items-center">
                  <span className="bg-white text-fuse rounded-full h-6 w-6 flex items-center justify-center mr-2 font-bold text-sm">1</span>
                  <span>Fill out the form</span>
                </div>
                <ExternalLink size={16} />
              </Button>
            </a>
            
            <a 
              href={`http://fuseenergy.com/enode/${getUsername(email)}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
              onClick={() => setStep2Clicked(true)}
            >
              <Button 
                className={`w-full ${step2Clicked ? 'bg-green-600 hover:bg-green-700' : 'bg-fuse hover:bg-fuse-dark'} text-white flex items-center justify-between`}
              >
                <div className="flex items-center">
                  <span className="bg-white text-fuse rounded-full h-6 w-6 flex items-center justify-center mr-2 font-bold text-sm">2</span>
                  <span>Connect your home devices</span>
                </div>
                <ExternalLink size={16} />
              </Button>
            </a>
            
            <div className="flex gap-3 mt-6">
              <Button 
                variant="outline"
                onClick={() => setIsSubmitted(false)}
                className="flex-1 border-fuse text-fuse hover:bg-fuse/10"
              >
                Go back
              </Button>
              
              <Button 
                onClick={handleComplete}
                disabled={!bothStepsCompleted}
                className={`flex-1 ${
                  bothStepsCompleted 
                    ? 'bg-gray-400 hover:bg-gray-500' 
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                } text-white`}
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
};

export default EmailForm;
