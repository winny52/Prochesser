import React, { useEffect } from 'react';

const TawkTo = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://embed.tawk.to/66fda66a37379df10df0f185/1i97d447c'; // New widget URL
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    
    script.onload = () => {
      // Widget script has loaded
      window.Tawk_API = window.Tawk_API || {};
      window.Tawk_LoadStart = new Date();
    };

    const firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode.insertBefore(script, firstScript);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export default TawkTo;
