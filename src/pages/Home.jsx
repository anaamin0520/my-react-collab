import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import TypewriterText from "./effects/TypewriterText";

function Home() {
    const navigate = useNavigate();
    const bgmRef = useRef(null);
    const [showSecondText, setShowSecondText] = useState(false);
    const [showChoices, setShowChoices] = useState(false);
    const [selectedVessel, setSelectedVessel] = useState(null);
    const handleSkip = () => {
        navigate('/about');
    };
    return (
        <motion.div
            className="bg-dark text-light"
            initial={{opacity: 0, y: -20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8}}
            style={{
                padding: '2rem',
                width: '100vw',
                boxSizing: 'border-box',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh'
            }}
        >
            <audio
                ref={bgmRef}
                src="/Chased.mp3"
                loop
            />
            {!showSecondText && (
                <TypewriterText
                    lines={["Are you there?"]}
                    typingSpeed={100}
                    onFinished={() => {
                        if (bgmRef.current) {
                            bgmRef.current.volume = 0.4; // optional: lower volume
                            bgmRef.current.play().catch((err) => {
                                console.log("Audio play blocked or failed:", err);
                            });
                        }
                        setShowSecondText(true);
                    }}
                />
            )}

            {showSecondText && (
                <TypewriterText
                    lines={[
                        "...",
                        "Ah!",
                        "There you are",
                        "Welcome",
                        "We may begin",
                        "First you must choose a vessel"
                    ]}
                    typingSpeed={100}
                    onFinished={() => {
                        setShowSecondText(false);
                        setShowChoices(true);
                    }}
                />
            )}
            {showChoices && !selectedVessel && (
                <div className="d-flex justify-content-center align-items-center gap-4 mt-4">
                    <div
                        style={{cursor: 'pointer'}}
                        onClick={() => setSelectedVessel('vesselA')}
                    >
                        <img
                            src="/vesselA.png"
                            alt="Vessel A"
                            style={{
                                width: '220px',
                                height: 'auto',
                                objectFit: 'contain',
                                borderRadius: '8px'
                            }}
                        />
                    </div>
                    <div
                        style={{cursor: 'pointer'}}
                        onClick={() => setSelectedVessel('vesselB')}
                    >
                        <img
                            src="/vesselB.png"
                            alt="Vessel B"
                            style={{
                                width: '220px',
                                height: 'auto',
                                objectFit: 'contain',
                                borderRadius: '8px'
                            }}
                        />
                    </div>
                </div>
            )}

            {/* <h3>Welcome to the <code>home</code> page</h3> */}
            {/*<p>This is the Home Page. Edit <code>Home.jsx</code> to customize this page! a quick try for a website</p>*/}
            <button
                className="btn btn-primary position-absolute bottom-0 end-0 m-3"
                onClick={() => navigate('/about')}
            >
                Skip
            </button>
        </motion.div>
    );
}

export default Home;