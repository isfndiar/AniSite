import { useEffect, useState } from "react";

export const useLoader = () => {
  const [isLoading, setIsLoading] = useState(false);
  // Test loader
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 3000);
  }, []);

  return {
    isLoading,
  };
};
