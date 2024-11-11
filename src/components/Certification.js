// src/components/Certification.js
import React from 'react';

const certifications = [
    { id: 1, title: "UI & UX Design", issuedBy: " Great Learning" },
    { id: 2, title: "The Joy of Computing Using Python", issuedBy: "NPTEL" },
];

const Certification = () => {
    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Certifications</h2>
            <ul style={styles.list}>
                {certifications.map(cert => (
                    <li key={cert.id} style={styles.item}>
                        <h2 style={styles.itemTitle}>{cert.title}</h2>
                        <p>Issued By: {cert.issuedBy}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        backgroundColor: '#242424', // Darker background
        borderRadius: '5px',
        boxShadow: '0 0 10px rgba(0,0,0,0.3)',
        maxWidth: '600px',
        margin: '20px auto',
    },
    heading: {
        color: '#e1e1e6', // Light heading color
    },
    list: {
        listStyleType: 'none',
        padding: '0',
    },
    item: {
        marginBottom: '15px',
        padding: '10px',
        backgroundColor: '#343434', // Slightly lighter than container
        borderRadius: '5px',
        boxShadow: '0 0 5px rgba(0,0,0,0.2)',
    },
    itemTitle: {
        color: '#e1e1e6', // Light text color for item title
    },
};

export default Certification;
