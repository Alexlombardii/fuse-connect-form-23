
import React from "react";
import Logo from "@/components/Logo";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white py-4 px-6 shadow-sm">
        <div className="container mx-auto flex justify-center md:justify-start">
          <Logo variant="full" className="h-12 md:h-16" />
        </div>
      </header>
      
      <main className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <Card className="w-full max-w-md p-6 shadow-lg bg-white relative">
            <div className="space-y-6 text-center py-8">
              <div className="flex justify-center mb-6">
                <div className="bg-fuse text-white rounded-full p-4">
                  <Check size={48} />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h2>
              <p className="text-gray-600 mb-10">Please return to the main page.</p>
            </div>
          </Card>
        </div>
      </main>
      
      <footer className="bg-white py-6 px-4 border-t border-gray-200">
        <div className="container mx-auto text-center">
          <p className="text-gray-500 text-sm mb-2">© {new Date().getFullYear()} Fuse Energy Supply Limited. All rights reserved.</p>
          <p className="text-xs text-gray-400 italic">
            Information covered under the <a href="https://www.fuseenergy.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="underline hover:text-fuse transition-colors">privacy policy</a>. 
            By default, any connections you make are strictly used for test purposes and will be deleted after 45 days.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ThankYou;
