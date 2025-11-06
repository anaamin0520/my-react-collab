import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
function About() {
    const navigate = useNavigate();
    return (
        <motion.div
            style={{
                padding: '2rem',
                maxWidth: '800px',
                margin: '0 auto'
            }}
            initial={{opacity: 0, y: -20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 2.0}}
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