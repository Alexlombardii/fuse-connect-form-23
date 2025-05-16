
import React from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

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
  onComplete 
}: NextStepsFormProps) => {
  // Extract username from email (everything before @)
  const getUsername = (email: string) => {
    return email.split('@')[0];
  };

  // Track if step 2 (form) has been clicked
  const [formClicked, setFormClicked] = React.useState(false);

  // Check if both steps are completed
  const bothStepsCompleted = step1Clicked && step2Clicked;

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Next Steps</h2>
        <p className="text-gray-600 mb-6">Please complete the following steps</p>
      </div>
      
      <div className="space-y-4">
        <a 
          href="https://platform-connect.arcadia.com/vu8LTRP3dqjGjVfdBxCd"
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
              <span>Click here and connect your utility account</span>
            </div>
            <ExternalLink size={16} />
          </Button>
        </a>
        
        <a 
          href="https://docs.google.com/forms/d/145aS0Va3Z02U5sBjkQcm54iLtRmsRROuj6y2E3M3GrA/edit"
          target="_blank" 
          rel="noopener noreferrer"
          className="block"
          onClick={() => setFormClicked(true)}
        >
          <Button 
            className={`w-full ${formClicked ? 'bg-green-600 hover:bg-green-700' : 'bg-fuse hover:bg-fuse-dark'} text-white flex items-center justify-between`}
          >
            <div className="flex items-center">
              <span className="bg-white text-fuse rounded-full h-6 w-6 flex items-center justify-center mr-2 font-bold text-sm">2</span>
              <span>Click here to fill out the form</span>
            </div>
            <ExternalLink size={16} />
          </Button>
        </a>
        
        <a 
          href={`https://api.fuseenergy.com/api/v1/ev/link/${getUsername(email)}/redirect`}
          target="_blank" 
          rel="noopener noreferrer"
          className="block"
          onClick={() => setStep2Clicked(true)}
        >
          <Button 
            className={`w-full ${step2Clicked ? 'bg-green-600 hover:bg-green-700' : 'bg-fuse hover:bg-fuse-dark'} text-white flex items-center justify-between`}
          >
            <div className="flex items-center">
              <span className="bg-white text-fuse rounded-full h-6 w-6 flex items-center justify-center mr-2 font-bold text-sm">3</span>
              <span>Click here to connect home devices</span>
            </div>
            <ExternalLink size={16} />
          </Button>
        </a>
        
        {bothStepsCompleted && (
          <p className="text-sm text-gray-600 text-center mt-1 mb-3">
            Please click #2 again if you have more devices to connect!
          </p>
        )}
        
        <div className="flex gap-3 mt-6">
          <Button 
            variant="outline"
            onClick={onGoBack}
            className="flex-1 border-fuse text-fuse hover:bg-fuse/10"
          >
            Go back
          </Button>
          
          <Button 
            onClick={onComplete}
            disabled={!bothStepsCompleted}
            className={`flex-1 ${
              bothStepsCompleted 
                ? 'bg-white border-fuse text-fuse hover:bg-gray-100' 
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NextStepsForm;
