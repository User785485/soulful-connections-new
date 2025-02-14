
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const OnboardingForm = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    experience: '',
    searchingFor: ''
  });

  const handleOptionSelect = (field, value) => {
    setFormData({ ...formData, [field]: value });
    if (currentStep < 2) {
      setTimeout(() => setCurrentStep(currentStep + 1), 500);
    }
  };

  const handleSubmit = () => {
    console.log('Inscription :', formData);
    navigate('/inscription');
  };

  const slides = {
    1: {
      title: "Avez-vous déjà utilisé un service de rencontre musulman ?",
      options: [
        { value: "nouveau", label: "C'est ma première fois" },
        { value: "quelques-fois", label: "J'ai déjà essayé" },
        { value: "habitue", label: "J'utilise régulièrement" }
      ]
    },
    2: {
      title: "Qui recherchez-vous ?",
      options: [
        { value: "homme", label: "Je recherche un homme" },
        { value: "femme", label: "Je recherche une femme" }
      ]
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <AnimatePresence mode="wait">
        {currentStep === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-medium text-white text-center">
              {slides[1].title}
            </h2>
            <div className="space-y-2 mt-4">
              {slides[1].options.map((option) => (
                <motion.button
                  key={option.value}
                  onClick={() => handleOptionSelect('experience', option.value)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full p-3 rounded-full text-left transition-all duration-300 
                    ${formData.experience === option.value 
                      ? 'bg-pink-600 text-white shadow-lg' 
                      : 'bg-white/90 hover:bg-white text-gray-800 hover:shadow-lg'}`}
                >
                  {option.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {currentStep === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-medium text-white text-center mb-6">
              {slides[2].title}
            </h2>
            <div className="space-y-2">
              {slides[2].options.map((option) => (
                <motion.button
                  key={option.value}
                  onClick={() => handleOptionSelect('searchingFor', option.value)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full p-3 rounded-full text-left transition-all duration-300 
                    ${formData.searchingFor === option.value 
                      ? 'bg-pink-600 text-white shadow-lg' 
                      : 'bg-white/90 hover:bg-white text-gray-800 hover:shadow-lg'}`}
                >
                  {option.label}
                </motion.button>
              ))}
            </div>

            {formData.searchingFor && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center pt-4"
              >
                <motion.button 
                  onClick={handleSubmit}
                  whileHover={{ 
                    scale: 1.03,
                    backgroundImage: 'linear-gradient(to right, #FF1493, #FF69B4, #9400D3)'
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 px-8 bg-gradient-to-r from-pink-600 via-pink-500 to-violet-500 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Commencer mon diagnostic gratuit
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress indicators */}
      <div className="flex justify-center space-x-2 mt-6">
        {[1, 2].map((step) => (
          <div
            key={step}
            className={`w-2 h-2 rounded-full transition-all duration-300 
              ${currentStep === step ? 'bg-pink-600 w-4' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default OnboardingForm;
