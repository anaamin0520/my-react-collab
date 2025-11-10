import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
function About() {
    const navigate = useNavigate();
    return (
        <motion.div
            className="bg-dark text-light"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
                padding: '2rem',
                width: '100vw',
                boxSizing: 'border-box',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundColor: '#121212',
                color: '#f1f1f1',
            }}
        >
            <h2>About Page</h2>
            <p>This is about page, go to About.jsx to customize</p>

            <button className="btn btn-secondary" onClick={() => navigate('/')}>
                Return
            </button>
        </motion.div>
    );
}

export default About;