import { motion } from 'framer-motion';

const StepProgressBar = ({ steps, currentStep }) => {
  const totalSteps = steps.length;
  const progressWidth = `${(100 / (totalSteps - 1)) * currentStep}%`;

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div className="mt-8 mb-16 relative">
        {/* Background Line */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-tertiary -translate-y-1/2" />
        
        {/* Progress Line */}
        <motion.div 
          className="absolute top-1/2 left-0 h-1 bg-orange-100 -translate-y-1/2"
          initial={{ width: '0%' }}
          animate={{ width: progressWidth }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        />

        {/* Steps */}
        <div className="relative flex justify-between">
          {steps.map(({ id, label }) => (
            <div key={id} className="relative z-10">
              {/* Step Circle */}
              <div 
                className={`w-12 h-12 rounded-full flex items-center justify-center border-2
                  ${currentStep >= id - 1
                    ? 'border-orange-500 bg-tertiary' 
                    : 'border-gray-700 bg-tertiary'
                  } transition-colors duration-300`}
              >
                {currentStep > id - 1 ? (
                  <svg 
                    className="w-6 h-6 text-orange-500" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M5 13l4 4L19 7" 
                    />
                  </svg>
                ) : (
                  <span className={`text-lg ${
                    currentStep >= id - 1 ? 'text-orange-500' : 'text-gray-500'
                  }`}>
                    {id}
                  </span>
                )}
              </div>
              
              {/* Step Label */}
              <div className="absolute max-sm:hidden -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <span className={`text-sm font-medium ${
                  currentStep >= id - 1 ? 'text-orange-500' : 'text-gray-500'
                }`}>
                  {label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StepProgressBar;