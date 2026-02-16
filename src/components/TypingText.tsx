import { useEffect, useState } from "react";

interface TypingTextProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
  trigger?: boolean;
}

const TypingText = ({ text, className = "", speed = 60, delay = 200, trigger = true }: TypingTextProps) => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (!trigger) {
      setDisplayed("");
      return;
    }
    
    let idx = 0;
    const delayTimer = setTimeout(() => {
      const interval = setInterval(() => {
        idx++;
        setDisplayed(text.slice(0, idx));
        if (idx >= text.length) clearInterval(interval);
      }, speed);
      return () => clearInterval(interval);
    }, delay);
    
    return () => clearTimeout(delayTimer);
  }, [trigger, text, speed, delay]);

  return (
    <span className={className}>
      {displayed}
      {trigger && displayed.length < text.length && (
        <span className="inline-block w-[2px] h-[0.85em] bg-neon-cyan align-middle ml-0.5 animate-pulse" />
      )}
    </span>
  );
};

export default TypingText;
