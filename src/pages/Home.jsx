import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    return (
        <motion.div
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
                height: '100vh'}}
        >
            <h1>Welcome to the <code>home</code> page</h1>
            <p>This is the Home Page. Edit <code>Home.jsx</code> to customize this page! a quick try for a website</p>
            <button className="btn btn-primary" onClick={() => navigate('/about')}>
                About Page
            </button>
        </motion.div>
    );
}

export default Home;