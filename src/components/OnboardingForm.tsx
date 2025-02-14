import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import TypeformButton from './TypeformButton';

const OnboardingForm = () => {
  const [recherche, setRecherche] = useState('');
  const [ageMin, setAgeMin] = useState('35');
  const [ageMax, setAgeMax] = useState('45');
  const [isSelectFocused, setIsSelectFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  // Générer les options d'âge de 18 à 80 ans
  const ageOptions = Array.from({ length: 63 }, (_, i) => i + 18);

  return (
    <motion.form 
      onSubmit={handleSubmit} 
      className="max-w-md mx-auto px-4 sm:px-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="space-y-5">
        {/* Options de recherche avec design amélioré */}
        <motion.div 
          className="relative group"
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
        >
          <div className={`relative flex items-center justify-between p-3.5 border-2 border-white/30 rounded-xl cursor-pointer 
            backdrop-blur-md bg-black/20 transition-all duration-300
            ${isSelectFocused ? 'border-pink-500 bg-black/30 shadow-lg shadow-pink-500/20' : 'hover:border-white/50 hover:bg-black/25'}`}
          >
            <select
              className="w-full outline-none text-white bg-transparent appearance-none cursor-pointer text-lg pr-8"
              value={recherche}
              onChange={(e) => setRecherche(e.target.value)}
              onFocus={() => setIsSelectFocused(true)}
              onBlur={() => setIsSelectFocused(false)}
              style={{ colorScheme: 'dark' }}
            >
              <option value="" className="bg-gray-900 text-white">Que recherchez-vous ?</option>
              <option value="femme-homme" className="bg-gray-900 text-white">Je suis une femme qui recherche un homme</option>
              <option value="homme-femme" className="bg-gray-900 text-white">Je suis un homme qui recherche une femme</option>
            </select>
            <div className="absolute right-3 pointer-events-none">
              <ChevronDown className={`w-5 h-5 transition-all duration-300 ${isSelectFocused ? 'text-pink-500' : 'text-white/70'}`} />
            </div>
          </div>
        </motion.div>

        {/* Sélection d'âge avec design amélioré */}
        <motion.div 
          className="flex items-center gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <div className="flex-1">
            <label className="block text-sm text-white/70 mb-2 font-medium ml-1">Entre</label>
            <motion.div 
              className="relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative flex items-center justify-between p-3.5 border-2 border-white/30 rounded-xl cursor-pointer 
                backdrop-blur-md bg-black/20 transition-all duration-300 hover:border-white/50 hover:bg-black/25 
                focus-within:border-pink-500 focus-within:bg-black/30 focus-within:shadow-lg focus-within:shadow-pink-500/20"
              >
                <select
                  className="w-full outline-none text-white bg-transparent appearance-none cursor-pointer text-lg text-center pr-8"
                  value={ageMin}
                  onChange={(e) => setAgeMin(e.target.value)}
                  style={{ colorScheme: 'dark' }}
                >
                  {ageOptions.map((age) => (
                    <option key={age} value={age} className="bg-gray-900 text-white">
                      {age}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3 pointer-events-none">
                  <ChevronDown className="w-5 h-5 text-white/70 group-hover:text-white/90" />
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex-1">
            <label className="block text-sm text-white/70 mb-2 font-medium ml-1">et</label>
            <motion.div 
              className="relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative flex items-center justify-between p-3.5 border-2 border-white/30 rounded-xl cursor-pointer 
                backdrop-blur-md bg-black/20 transition-all duration-300 hover:border-white/50 hover:bg-black/25
                focus-within:border-pink-500 focus-within:bg-black/30 focus-within:shadow-lg focus-within:shadow-pink-500/20"
              >
                <select
                  className="w-full outline-none text-white bg-transparent appearance-none cursor-pointer text-lg text-center pr-8"
                  value={ageMax}
                  onChange={(e) => setAgeMax(e.target.value)}
                  style={{ colorScheme: 'dark' }}
                >
                  {ageOptions.map((age) => (
                    <option key={age} value={age} className="bg-gray-900 text-white">
                      {age}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3 pointer-events-none">
                  <ChevronDown className="w-5 h-5 text-white/70 group-hover:text-white/90" />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bouton de recherche amélioré */}
        <motion.div
          className="pt-2 pb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <TypeformButton className="w-full bg-gradient-to-r from-[#E31B54] to-[#C41848] text-white py-3.5 px-8 rounded-xl 
            font-semibold text-lg shadow-lg shadow-pink-500/20 transition-all duration-300
            hover:shadow-xl hover:shadow-pink-500/30 hover:from-[#C41848] hover:to-[#E31B54]
            active:scale-[0.98]">
            Commencer
          </TypeformButton>
        </motion.div>
      </div>
    </motion.form>
  );
};

export default OnboardingForm;
