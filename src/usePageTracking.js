import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if the gtag function exists
    if (window.gtag) {
      window.gtag('config', 'G-ZKHW6JDXTX', {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);
};

export default usePageTracking;
