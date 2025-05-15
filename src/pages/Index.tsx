
import React from "react";
import EmailForm from "@/components/EmailForm";
import Logo from "@/components/Logo";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white py-4 px-6 shadow-sm">
        <div className="container mx-auto flex justify-center md:justify-start">
          <Logo variant="full" className="h-12 md:h-16" />
        </div>
      </header>
      
      <main className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <EmailForm />
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

export default Index;
