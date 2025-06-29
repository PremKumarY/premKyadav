import React, { useEffect, useState } from 'react';
import "./style.css";

function LoadingScreen({ onComplete }) {
  const [text, setText] = useState("");
  const fullText = "<Hello World/>";

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);

        setTimeout(() => {
          if (onComplete) onComplete();
        }, 1000); // wait 1s after typing
      }
    }, 100); // typing speed

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className='fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center'>
      <div className="mb-4 text-4xl font-mono font-bold">
        {text}
        <span className='animate-blink ml-1'>| Prem</span>
      </div>
      <div className="w-[200px] h-2 bg-gray-800 rounded relative overflow-hidden">
        <div className="absolute left-0 top-0 w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar" />
      </div>
    </div>
  );
}

export default LoadingScreen;
