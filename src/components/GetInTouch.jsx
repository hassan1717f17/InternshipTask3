import { useEffect, useState } from 'react';
import './GetInTouch.css';

const GetInTouch = () => {
    const words1 = ["REBRAND", "PROPEL", "ELEVATE"];
    const words2 = ["BUSINESS", "PROJECTS", "CODE BASE"];
    const [index, setIndex] = useState(0);
    const [cursorPosition1, setCursorPosition1] = useState(0);
    const [cursorPosition2, setCursorPosition2] = useState(0);
    const [currentWord1, setCurrentWord1] = useState("");
    const [currentWord2, setCurrentWord2] = useState("");
    const [isTyping1, setIsTyping1] = useState(true);
    const [isTyping2, setIsTyping2] = useState(true);
    
    useEffect(() => {
        let typingInterval;

        const typeWord = (wordIndex) => {
            if (wordIndex === 0) {
                if (cursorPosition1 < words1[index].length) {
                    setCurrentWord1((prev) => prev + words1[index][cursorPosition1]);
                    setCursorPosition1((prev) => prev + 1);
                } else {
                    setIsTyping1(false);
                }
            } else {
                if (cursorPosition2 < words2[index].length) {
                    setCurrentWord2((prev) => prev + words2[index][cursorPosition2]);
                    setCursorPosition2((prev) => prev + 1);
                } else {
                    setIsTyping2(false);
                }
            }
        };

        const eraseWord = (wordIndex) => {
            if (wordIndex === 0) {
                if (cursorPosition1 > 0) {
                    setCurrentWord1((prev) => prev.slice(0, -1));
                    setCursorPosition1((prev) => prev - 1);
                } else {
                    setIsTyping1(true);
                    setTimeout(() => {
                        setIndex((prevIndex) => (prevIndex + 1) % words1.length);
                        setCurrentWord1("");
                        setCursorPosition1(0);
                    }, 1000);
                }
            } else {
                if (cursorPosition2 > 0) {
                    setCurrentWord2((prev) => prev.slice(0, -1));
                    setCursorPosition2((prev) => prev - 1);
                } else {
                    setIsTyping2(true);
                    setTimeout(() => {
                        setIndex((prevIndex) => (prevIndex + 1) % words2.length);
                        setCurrentWord2("");
                        setCursorPosition2(0);
                    }, 1000);
                }
            }
        };

        typingInterval = setInterval(() => {
            if (isTyping1) {
                typeWord(0);
            } else {
                eraseWord(0);
            }
            if (isTyping2) {
                typeWord(1);
            } else {
                eraseWord(1);
            }
        }, 150);

        return () => clearInterval(typingInterval);
    }, [index, cursorPosition1, cursorPosition2, isTyping1, isTyping2]);

    return (
        <div className="get-in-touch-wrapper">
            <div className="text-animation">
                <span style={{ position: 'relative' }}>
                    <span className={`cursor`} style={{ width: '2px', visibility: 'visible' }}></span>
                    {currentWord1}
                </span>
                <span>YOUR</span>
                <span style={{ position: 'relative' }}>
                    <span className={`cursor`} style={{ width: '2px', visibility: 'visible' }}></span>
                    {currentWord2}
                </span>
                <span>WITH US</span>
            </div>
            <button className="get-in-touch-button">GET IN TOUCH</button>
            <div className="contact-info">
                <p>Phone: +1 123-456-7890</p>
                <p>Email: info@example.com</p>
                <p>Address: 123 Main Street, City, State, Country</p>
            </div>
        </div>
    );
};

export default GetInTouch;
