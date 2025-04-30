
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
        <div className="container mx-auto text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Fuse Energy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
