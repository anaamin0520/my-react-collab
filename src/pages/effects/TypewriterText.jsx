import React, { useEffect, useState } from "react";

function TypewriterText({ lines, typingSpeed = 1000, onFinished }) {
    const [currentLineIndex, setCurrentLineIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isTyping, setIsTyping] = useState(true);

    // Typewriter effect for the current line
    useEffect(() => {
        const currentLine = lines[currentLineIndex];
        setDisplayedText("");
        setIsTyping(true);

        let charIndex = 0;
        const interval = setInterval(() => {
            charIndex++;
            setDisplayedText(currentLine.slice(0, charIndex));

            if (charIndex === currentLine.length) {
                clearInterval(interval);
                setIsTyping(false);
            }
        }, typingSpeed);

        return () => clearInterval(interval);
    }, [currentLineIndex, lines, typingSpeed]);

    // Listen for Enter key
    useEffect(() => {
        function handleKeyDown(e) {
            if (e.key !== "Enter") return;

            const currentLine = lines[currentLineIndex];

            // If it's still typing, finish the line instantly
            if (isTyping) {
                setDisplayedText(currentLine);
                setIsTyping(false);
                return;
            }

            // If done typing and there is another line → go to next line
            if (!isTyping && currentLineIndex < lines.length - 1) {
                setCurrentLineIndex((prev) => prev + 1);
                return;
            }

            // Last line finished → call onFinished if provided
            if (!isTyping && currentLineIndex === lines.length - 1) {
                if (onFinished) onFinished();
            }
        }

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isTyping, currentLineIndex, lines, onFinished]);

    return (
        <div>
            <p
                style={{
                    fontSize: "5rem",
                    maxWidth: "700px",
                    margin: "0 auto",
                }}
            >
                {displayedText}
                <span>|</span>
            </p>

            <p
                style={{
                    marginTop: "1rem",
                    fontSize: "0.9rem",
                    opacity: 0.7,
                }}
            >
                {isTyping
                    ? "..."
                    : currentLineIndex < lines.length - 1
                        ? "Press Enter to continue"
                        : "Press Enter to proceed"}
            </p>
        </div>
    );
}

export default TypewriterText;