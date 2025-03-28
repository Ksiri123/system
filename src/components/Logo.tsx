
import React from "react";

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img 
        src="/lovable-uploads/089be2f6-044d-4b93-beee-c7630f0a601a.png" 
        alt="Symbiotes Logo" 
        className="h-8 w-auto"
      />
<span className="text-xl font-bold text-[#ffffff]">Symbiotes.ai</span>

    </div>
  );
};

export default Logo;
