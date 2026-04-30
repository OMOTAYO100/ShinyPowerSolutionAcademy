import React from 'react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/2349048583593"
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_4px_12px_rgba(37,211,102,0.4)] hover:bg-[#20ba59] hover:-translate-y-1 hover:scale-105 transition-all duration-300 animate-bounce"
      aria-label="Chat with us on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-8 h-8"
      >
        <path d="M12.004 2c-5.513 0-10 4.486-10 10.001 0 1.946.564 3.765 1.538 5.29L2.198 22l4.896-1.34c1.472.846 3.167 1.34 4.91 1.34 5.513 0 10-4.486 10-10.001S17.517 2 12.004 2zm5.405 14.397c-.23.649-1.332 1.246-1.848 1.319-.501.071-1.15.183-3.66-1.258-3.033-1.745-4.996-4.834-5.143-5.03-.146-.195-1.229-1.637-1.229-3.12 0-1.482.766-2.215 1.037-2.51.272-.296.594-.37.791-.37.197 0 .394 0 .564.01.184.01.43-.075.674.513.255.611.874 2.133.951 2.291.077.158.128.344.026.541-.102.196-.153.319-.307.491-.153.171-.322.383-.46.513-.153.146-.312.308-.135.614.177.306.787 1.302 1.684 2.106 1.157 1.037 2.144 1.353 2.451 1.499.307.146.486.122.665-.084.179-.207.766-.893.971-1.201.204-.308.408-.257.689-.159.281.098 1.786.843 2.093.991.307.147.51.22.587.343.076.122.076.711-.154 1.36z" />
      </svg>
      {/* Tooltip that appears on hover */}
      <span className="absolute right-16 bg-white dark:bg-[#1a1d27] text-gray-800 dark:text-gray-200 text-sm font-semibold px-4 py-2 rounded-lg shadow-md opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap hidden md:block">
        Need help? Chat with us!
      </span>
    </a>
  );
};

export default WhatsAppButton;
