import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Jobs = () => {
    const [selectedCompany, setSelectedCompany] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const companies = [
        {
            name: 'EmpowerTech',
            description: 'Tech company with a 50% female leadership team, equal pay, and mental health support.',
            jobs: ['Frontend Intern', 'Diversity Analyst Assistant']
        },
        {
            name: 'PinkWave Consulting',
            description: 'Certified top employer for women with remote-first culture and mentorship programs.',
            jobs: ['Research Assistant', 'Marketing Intern']
        },
        {
            name: 'SafeSpace Labs',
            description: 'Focused on building inclusive software teams. Hosts regular DEI workshops.',
            jobs: ['QA Intern', 'Product Support Assistant']
        },
        {
            name: 'BrightFuture AG',
            description: 'Inclusive workplace with flexible hours and family-friendly benefits.',
            jobs: ['Data Analyst Intern', 'UX Research Assistant']
        },
        {
            name: 'EquiWork Solutions',
            description: 'Known for transparent promotion policies and LGBTQ+ allyship.',
            jobs: ['HR Support Intern', 'Equality Policy Intern']
        },
        {
            name: 'STEMShe Initiative',
            description: 'Nonprofit promoting women in STEM fields, especially at universities.',
            jobs: ['Workshop Coordinator', 'Social Media Intern']
        }
    ];

    return (
        <div style={{
            background: 'linear-gradient(135deg, #ffc0cb, #dda0dd, #ffb347)',
            minHeight: '100vh',
            width: '100vw',
            padding: '2rem',
            fontFamily: '"Georgia", serif',
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
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
            <h1 style={{ textAlign: 'center', fontSize: '2.5rem', fontWeight: '800', marginBottom: '0.5rem' }}>
                ✦ Inclusive Companies ✦
            </h1>
            <p style={{ textAlign: 'center', fontStyle: 'italic', marginBottom: '2rem' }}>
                Discover employers committed to equality, safety, and opportunity for women at TUM.
            </p>
            <input
                type="text"
                placeholder="Search companies or jobs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                    width: '100%',
                    maxWidth: '600px',
                    padding: '0.75rem',
                    borderRadius: '8px',
                    border: 'none',
                    marginBottom: '2rem',
                    fontSize: '1rem',
                    backgroundColor: '#ffe3ec',
                    color: '#d6428f',
                    fontWeight: '500',
                    outline: 'none'
                }}
            />
            {companies
                .filter(c => {
                    const term = searchTerm.toLowerCase();
                    return (
                        c.name.toLowerCase().includes(term) ||
                        c.jobs.some(job => job.toLowerCase().includes(term))
                    );
                })
                .map((company, index) => (
                    <div
                        key={index}
                        onClick={() => setSelectedCompany(selectedCompany === index ? null : index)}
                        style={{
                            backgroundColor: '#fff',
                            color: '#333',
                            borderRadius: '16px',
                            padding: '1.8rem',
                            margin: '1rem 0',
                            width: '100%',
                            maxWidth: '600px',
                            boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
                            cursor: 'pointer',
                            transition: 'transform 0.3s ease'
                        }}
                        onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'}
                        onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                        <h2 style={{ marginBottom: '0.5rem' }}>{company.name}</h2>
                        <p style={{ fontSize: '0.9rem' }}>{company.description}</p>
                        {selectedCompany === index && (
                            <div style={{ marginTop: '1rem' }}>
                                <h4 style={{ marginBottom: '0.5rem' }}>📌 Student Jobs</h4>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    {company.jobs.map((job, i) => (
                                        <li key={i} style={{ backgroundColor: '#f8f8f8', color: '#000', margin: '0.5rem 0', borderRadius: '8px', padding: '0.5rem' }}>
                                            {job}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                ))}
        </div>
    );
};

export default Jobs;