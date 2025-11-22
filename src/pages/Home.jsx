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
                minHeight: '100vh',
                background: 'linear-gradient(135deg, #ffc0cb, #dda0dd, #ffb347)'
            }}
        >
            <h1 style={{
                fontSize: '3.2rem',
                color: '#fff',
                fontWeight: '800',
                marginBottom: '0.5rem',
                fontFamily: '"Georgia", serif'
            }}>
                ✦ You’re Not Alone at TUM ✦
            </h1>
            <p style={{
                maxWidth: '600px',
                color: '#fff',
                fontSize: '1.1rem',
                marginBottom: '2.5rem',
                textAlign: 'center',
                fontStyle: 'italic'
            }}>
                We’ve created a safe space where you're supported and empowered.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '3rem' }}>
                {[
                    { label: 'Get Help', path: '/help' },
                    { label: 'About Us', path: '/about' },
                    { label: 'Study Groups', path: '/study-groups' },
                    { label: 'Jobs', path: '/jobs' },
                    { label: 'Events', path: '/events' }
                ].map(({ label, path }) => (
                    <button
                        key={label}
                        onClick={() => navigate(path)}
                        style={{
                            backgroundColor: '#d6428f',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '999px',
                            padding: '0.6rem 1.4rem',
                            fontSize: '1rem',
                            fontWeight: '600',
                            cursor: 'pointer',
                            transition: '0.3s ease'
                        }}
                        onMouseEnter={e => e.currentTarget.style.backgroundColor = '#bf367d'}
                        onMouseLeave={e => e.currentTarget.style.backgroundColor = '#d6428f'}
                    >
                        {label}
                    </button>
                ))}
            </div>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '2rem',
                maxWidth: '900px'
            }}>
                <div
                    style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.15)',
                        padding: '1.5rem',
                        borderRadius: '16px',
                        width: '250px',
                        color: '#fff',
                        textAlign: 'center',
                        backdropFilter: 'blur(6px)',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                    }}
                    onMouseEnter={e => {
                        e.currentTarget.style.transform = 'translateY(-5px)';
                        e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.25)';
                    }}
                    onMouseLeave={e => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
                    }}
                >
                    <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🧾</div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Know Your Rights</h3>
                    <p style={{ fontSize: '0.9rem' }}>Learn about your legal protections</p>
                </div>
                <div
                    style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.15)',
                        padding: '1.5rem',
                        borderRadius: '16px',
                        width: '250px',
                        color: '#fff',
                        textAlign: 'center',
                        backdropFilter: 'blur(6px)',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                    }}
                    onMouseEnter={e => {
                        e.currentTarget.style.transform = 'translateY(-5px)';
                        e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.25)';
                    }}
                    onMouseLeave={e => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
                    }}
                >
                    <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🆘</div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Where to Get Help</h3>
                    <p style={{ fontSize: '0.9rem' }}>Find resources and support services</p>
                </div>
                <div
                    style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.15)',
                        padding: '1.5rem',
                        borderRadius: '16px',
                        width: '250px',
                        color: '#fff',
                        textAlign: 'center',
                        backdropFilter: 'blur(6px)',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                    }}
                    onMouseEnter={e => {
                        e.currentTarget.style.transform = 'translateY(-5px)';
                        e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.25)';
                    }}
                    onMouseLeave={e => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
                    }}
                >
                    <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>💼</div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Inclusive Companies</h3>
                    <p style={{ fontSize: '0.9rem' }}>Discover diversity-focused employers</p>
                </div>
                <div
                    style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.15)',
                        padding: '1.5rem',
                        borderRadius: '16px',
                        width: '250px',
                        color: '#fff',
                        textAlign: 'center',
                        backdropFilter: 'blur(6px)',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                    }}
                    onMouseEnter={e => {
                        e.currentTarget.style.transform = 'translateY(-5px)';
                        e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.25)';
                    }}
                    onMouseLeave={e => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
                    }}
                >
                    <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📅</div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Events</h3>
                    <p style={{ fontSize: '0.9rem' }}>Join empowering meetups and workshops</p>
                </div>
            </div>
            <div style={{ marginTop: '4rem', fontStyle: 'italic', color: '#fff', fontSize: '1rem' }}>
                “This page helped me feel seen and understood.”
            </div>
        </motion.div>
    );
}

export default Home;