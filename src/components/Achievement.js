// src/components/Achievement.js
import React from 'react';

const achievements = [
    { id: 1, title: "Ladies Representative, ACSES Club", text: "Sanjay Ghodawat University, Kolhapur" },
    { id: 2, title: "Creative Secretary, CSI (Computer Society of India)", text: "Sanjay Ghodawat University, Kolhapur" },
];

const Achievement = () => {
    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Leadership and Extracurricular Activities</h2>
            <ul style={styles.list}>
                {achievements.map(ach => (
                    <li key={ach.id} style={styles.item}>
                        <h2 style={styles.itemTitle}>{ach.title}</h2>
                        <p>{ach.text}</p>
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

export default Achievement;
