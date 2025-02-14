
import React from 'react';
import { Gift } from 'lucide-react';

const TopBanner = () => {
  return (
    <div className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-1 md:py-1.5 px-2 md:px-4 text-center">
      <div className="font-medium text-[11px] md:text-sm flex items-center justify-center gap-1 whitespace-nowrap">
        <Gift className="w-3 h-3 md:w-4 md:h-4 animate-bounce" />
        <span className="font-bold">DERNIÈRE CHANCE :</span> Plus que{" "}
        <span className="text-yellow-300 font-bold">27 places</span> disponibles !
        <span className="bg-white text-pink-600 px-1.5 py-0.5 rounded-full text-[9px] md:text-xs font-bold animate-pulse">
          Expire bientôt
        </span>
      </div>
    </div>
  );
};

export default TopBanner;

