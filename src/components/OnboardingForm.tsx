import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const OnboardingForm = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<number>(1);

  const handleNext = () => {
    setCurrentStep((prev: number) => prev + 1);
  };

  const handlePrevious = () => {
    setCurrentStep((prev: number) => prev - 1);
  };

  const handleSubmit = () => {
    navigate('/diagnostic');
  };

  return (
    <div className="w-full max-w-md mx-auto p-6">
      <AnimatePresence mode="wait">
        {currentStep === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-bold">Step 1</h2>
            <button
              onClick={handleNext}
              className="w-full bg-primary text-white py-2 rounded-md"
            >
              Next
            </button>
          </motion.div>
        )}

        {currentStep === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-bold">Step 2</h2>
            <div className="flex justify-between">
              <button
                onClick={handlePrevious}
                className="bg-gray-200 px-4 py-2 rounded-md"
              >
                Back
              </button>
              <button
                onClick={handleNext}
                className="bg-primary text-white px-4 py-2 rounded-md"
              >
                Next
              </button>
            </div>
          </motion.div>
        )}

        {currentStep === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-bold">Final Step</h2>
            <div className="flex justify-between">
              <button
                onClick={handlePrevious}
                className="bg-gray-200 px-4 py-2 rounded-md"
              >
                Back
              </button>
              <button
                onClick={handleSubmit}
                className="bg-primary text-white px-4 py-2 rounded-md"
              >
                Submit
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OnboardingForm;
