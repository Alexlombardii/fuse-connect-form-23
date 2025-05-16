
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import EmailInputForm from "./email/EmailInputForm";
import NextStepsForm from "./email/NextStepsForm";
import CompletionMessage from "./email/CompletionMessage";
import ConfettiStyles from "./email/ConfettiStyles";

const EmailForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isCompleted, setIsCompleted] = useState(false);
  const [step1Clicked, setStep1Clicked] = useState(false);
  const [step2Clicked, setStep2Clicked] = useState(false);
  const [step3Clicked, setStep3Clicked] = useState(false);
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

  return (
    <Card className="w-full max-w-md p-6 shadow-lg bg-white relative">
      <ConfettiStyles />
      
      {!isSubmitted ? (
        <EmailInputForm 
          email={email} 
          setEmail={setEmail} 
          isValidEmail={isValidEmail} 
          onSubmit={handleSubmit} 
        />
      ) : isCompleted ? (
        <CompletionMessage 
          onStartOver={() => {
            setIsSubmitted(false);
            setIsCompleted(false);
            setStep1Clicked(false);
            setStep2Clicked(false);
            setStep3Clicked(false);
          }} 
        />
      ) : (
        <NextStepsForm 
          email={email}
          step1Clicked={step1Clicked}
          step2Clicked={step3Clicked}  // Note: We're mapping the new step3Clicked to step2Clicked in the props
          setStep1Clicked={setStep1Clicked}
          setStep2Clicked={setStep3Clicked}  // Same mapping here
          onGoBack={() => setIsSubmitted(false)}
          onComplete={handleComplete}
        />
      )}
    </Card>
  );
};

export default EmailForm;
