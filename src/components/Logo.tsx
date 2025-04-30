
import React from "react";

type LogoProps = {
  variant: "full" | "icon";
  className?: string;
};

const Logo = ({ variant, className = "" }: LogoProps) => {
  if (variant === "full") {
    return (
      <img 
        src="/lovable-uploads/6e6e3b2c-736e-4aa8-a05b-ece65517f30f.png" 
        alt="Fuse Energy" 
        className={`h-auto ${className}`}
      />
    );
  }
  
  return (
    <img 
      src="/lovable-uploads/9221d047-c89f-4959-a1e5-fe63dc3a9969.png" 
      alt="Fuse Energy Icon" 
      className={`h-auto ${className}`}
    />
  );
};

export default Logo;
