import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Help() {
    const navigate = useNavigate();
    const [activeSection, setActiveSection] = React.useState(null);

    const helpSections = [
        {
            title: '🚨 Emergency (Life-threatening)',
            description: 'Call 112 for immediate medical or police assistance.',
            color: '#ff8a80'
        },
        {
            title: '🎓 Academic Issues or Discrimination',
            description: 'Contact the TUM Student Advocacy Office at studentadvice@tum.de.',
            color: '#f48fb1'
        },
        {
            title: '🧠 Mental Health Support',
            description: 'Reach out to the TUM Psychologische Beratung at beratung@tum.de or visit the mental health center.',
            color: '#ce93d8'
        },
        {
            title: '🚫 Harassment or Assault',
            description: 'Get confidential help from the TUM Complaints Office at complaints@tum.de or visit Room 0143, Main Campus.',
            color: '#f06292'
        }
    ];

    return (
        <div style={{
            background: 'linear-gradient(135deg, #ffc0cb, #dda0dd, #ffb347)',
            minHeight: '100vh',
            padding: '2rem',
            fontFamily: '"Georgia", serif',
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100vw'
        }}>
            <button
                onClick={() => navigate('/')}
                style={{
                    alignSelf: 'flex-start',
                    marginBottom: '1rem',
                    padding: '0.5rem 1.2rem',
                    backgroundColor: '#d6428f',
                    border: 'none',
                    borderRadius: '999px',
                    color: '#fff',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: '0.3s ease'
                }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = '#bf367d'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = '#d6428f'}
            >
                ← Back to Home
            </button>

            <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '0.5rem', color: '#fff' }}>
                ✦ Need Help? ✦
            </h1>
            <p style={{
                textAlign: 'center',
                fontStyle: 'italic',
                marginBottom: '2rem',
                maxWidth: '700px',
                color: '#f5f5f5'
            }}>
                If you're in a difficult or unsafe situation, here’s who you can talk to. You're never alone.
            </p>

            {helpSections.map((section, index) => (
                <div
                    key={index}
                    onClick={() => setActiveSection(activeSection === index ? null : index)}
                    style={{
                        backgroundColor: '#fff',
                        padding: '1.5rem',
                        borderLeft: `8px solid ${section.color}`,
                        borderRadius: '12px',
                        margin: '1rem 0',
                        maxWidth: '600px',
                        width: '100%',
                        boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
                        color: '#333',
                        textAlign: 'left',
                        transition: 'transform 0.3s ease',
                        cursor: 'pointer'
                    }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                >
                    <h2 style={{ marginBottom: '0.5rem' }}>{section.title}</h2>
                    <p style={{ fontSize: '0.95rem' }}>{section.description}</p>
                    {activeSection === index && (
                        <div style={{ marginTop: '1rem', textAlign: 'left' }}>
                            <p style={{ fontWeight: 'bold' }}>Reach out to:</p>
                            <ul style={{ paddingLeft: '1rem', fontSize: '0.9rem' }}>
                                <li><strong>Name:</strong> Jane Doe</li>
                                <li><strong>Email:</strong> jane.doe@example.com</li>
                                <li><strong>Phone:</strong> +49 123 456789</li>
                            </ul>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
