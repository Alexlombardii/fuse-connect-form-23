
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle } from "lucide-react";

interface NextStepsFormProps {
  email: string;
  step1Clicked: boolean;
  step2Clicked: boolean;
  setStep1Clicked: (clicked: boolean) => void;
  setStep2Clicked: (clicked: boolean) => void;
  onGoBack: () => void;
  onComplete: () => void;
}

const NextStepsForm = ({
  email,
  step1Clicked,
  step2Clicked,
  setStep1Clicked,
  setStep2Clicked,
  onGoBack,
  onComplete,
}: NextStepsFormProps) => {
  const bothStepsCompleted = step1Clicked && step2Clicked;

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Next Steps</h2>
        <p className="text-gray-600 mb-6">
          Complete the following steps to get started with your account.
        </p>
      </div>

      <div className="space-y-4">
        <div 
          className={`p-4 border rounded-lg transition-all ${
            step1Clicked ? "bg-green-50 border-green-200" : "bg-white border-gray-200 hover:border-gray-300"
          }`}
        >
          <div className="flex items-start gap-3">
            <div className="mt-0.5">
              {step1Clicked ? (
                <CheckCircle className="h-5 w-5 text-green-500" />
              ) : (
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-100 text-xs font-medium text-gray-500">
                  1
                </span>
              )}
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-gray-800">Register an Account</h3>
              <p className="text-sm text-gray-600 mt-1 mb-2">
                Click the button below to create your account with {email}.
              </p>
              <Button 
                variant="outline"
                className={`mt-1 ${step1Clicked ? "bg-green-50 border-green-200" : ""}`}
                onClick={() => {
                  setStep1Clicked(true);
                  if (step2Clicked) onComplete();
                }}
              >
                {step1Clicked ? "Completed" : "Register Now"}
              </Button>
            </div>
          </div>
        </div>

        <div 
          className={`p-4 border rounded-lg transition-all ${
            step2Clicked ? "bg-green-50 border-green-200" : "bg-white border-gray-200 hover:border-gray-300"
          }`}
        >
          <div className="flex items-start gap-3">
            <div className="mt-0.5">
              {step2Clicked ? (
                <CheckCircle className="h-5 w-5 text-green-500" />
              ) : (
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-100 text-xs font-medium text-gray-500">
                  2
                </span>
              )}
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-gray-800">Connect Your Devices</h3>
              <p className="text-sm text-gray-600 mt-1 mb-2">
                Connect your smart devices to start monitoring your energy usage.
              </p>
              <a href="https://connect.fuseenergy.com" target="_blank" rel="noopener noreferrer">
                <Button 
                  variant="outline"
                  className={`mt-1 ${step2Clicked ? "bg-green-50 border-green-200" : ""}`}
                  onClick={() => {
                    setStep2Clicked(true);
                    if (step1Clicked) onComplete();
                  }}
                >
                  {step2Clicked ? "Completed" : "Connect Now"}
                </Button>
              </a>
            </div>
          </div>
        </div>
        
        <p className="text-xs text-gray-400 italic text-center mt-1 opacity-70">
          By default, any connections you make are strictly used for test purposes and will be deleted after 45 days.
        </p>
        
        {bothStepsCompleted && (
          <p className="text-sm text-gray-600 text-center mt-1 mb-3">
            Please click #2 again if you have more devices to connect!
          </p>
        )}
      </div>

      <div className="flex justify-between mt-6">
        <Button 
          variant="ghost" 
          className="text-gray-600"
          onClick={onGoBack}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
        
        {bothStepsCompleted && (
          <Button 
            className="bg-fuse hover:bg-fuse-dark text-white"
            onClick={onComplete}
          >
            Complete
          </Button>
        )}
      </div>
    </div>
  );
};

export default NextStepsForm;
