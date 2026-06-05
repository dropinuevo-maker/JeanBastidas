import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const useSecretClicks = (clicksRequired: number, timeWindow: number, callback: () => void) => {
  const [clicks, setClicks] = useState<number[]>([]);
  const navigate = useNavigate();

  return useCallback(() => {
    const now = Date.now();
    const newClicks = [...clicks, now].filter(time => now - time < timeWindow);
    setClicks(newClicks);
    if (newClicks.length === clicksRequired) {
      setClicks([]);
      callback();
    }
  }, [clicks, clicksRequired, timeWindow, callback]);
};
