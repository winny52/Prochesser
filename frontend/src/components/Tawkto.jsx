useEffect(() => {
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://embed.tawk.to/66fda66a37379df10df0f185/1i97d447c'; // New widget URL
  script.charset = 'UTF-8';
  script.setAttribute('crossorigin', '*');

  script.onload = () => {
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    // Hide widget on small screens
    if (window.innerWidth < 768) {
      window.Tawk_API.hideWidget();
    }
  };

  const firstScript = document.getElementsByTagName('script')[0];
  firstScript.parentNode.insertBefore(script, firstScript);

  window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
      window.Tawk_API.hideWidget();
    } else {
      window.Tawk_API.showWidget();
    }
  });

  return () => {
    document.head.removeChild(script);
  };
}, []);
