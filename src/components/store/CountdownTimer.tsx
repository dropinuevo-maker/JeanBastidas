import { useState, useEffect } from 'react';

export function CountdownTimer({ expiresAt, className, itemClassName }: { expiresAt: Date | null, className?: string, itemClassName?: string }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    if (!expiresAt) return;
    const interval = setInterval(() => {
      const difference = expiresAt.getTime() - new Date().getTime();
      if (difference <= 0) {
        clearInterval(interval);
        return;
      }
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [expiresAt]);

  return (
    <div className={`flex items-center gap-1 font-mono ${className}`}>
      <div className={`bg-white text-black border border-gray-200 rounded px-1 py-0.5 text-[10px] ${itemClassName}`}>{timeLeft.days}d</div>
      <span className="text-gray-400">:</span>
      <div className={`bg-white text-black border border-gray-200 rounded px-1 py-0.5 text-[10px] ${itemClassName}`}>{timeLeft.hours}h</div>
      <span className="text-gray-400">:</span>
      <div className={`bg-white text-black border border-gray-200 rounded px-1 py-0.5 text-[10px] ${itemClassName}`}>{timeLeft.minutes}m</div>
      <span className="text-gray-400">:</span>
      <div className={`bg-white text-black border border-gray-200 rounded px-1 py-0.5 text-[10px] ${itemClassName}`}>{timeLeft.seconds}s</div>
    </div>
  );
}
