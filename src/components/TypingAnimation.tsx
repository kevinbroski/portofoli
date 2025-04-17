import React, { useState, useEffect } from 'react';

interface TypingAnimationProps {
    steps: string[];
    shouldStack?: boolean;
    speed?: number;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({ steps, shouldStack = false, speed = 20 }) => {
    const [displayText, setDisplayText] = useState<string[]>([]);
    const [stepIndex, setStepIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        if (stepIndex < steps.length) {
            if (charIndex < steps[stepIndex].length) {
                const timeout = setTimeout(() => {
                    setDisplayText((prevText) => {
                        const updatedText = [...prevText];
                        updatedText[stepIndex] = (updatedText[stepIndex] || '') + steps[stepIndex][charIndex];
                        return updatedText;
                    });
                    setCharIndex(charIndex + 1);
                }, speed);
                return () => clearTimeout(timeout);
            } else {
                const timeout = setTimeout(() => {
                    setCharIndex(0);
                    setStepIndex(stepIndex + 1);
                }, speed * 10);
                return () => clearTimeout(timeout);
            }
        }
    }, [charIndex, stepIndex, steps, speed]);

    return (
        <div className="text-xl">
            {displayText.map((text, index) => (
                <div key={`${index}-text`} style={{ whiteSpace: shouldStack ? 'normal' : 'nowrap' }}>
                    {text}
                </div>
            ))}
        </div>
    );
};

export default TypingAnimation;