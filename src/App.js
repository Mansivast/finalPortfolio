// src/App.js
import React from 'react';
import Navbar from './components/Navbar'; // Adjust the path as necessary
import About from './components/About'; // Adjust the path as necessary
import Projects from './components/Projects'; // Assuming you have a Projects component
import Certification from './components/Certification'; // Importing Certification component
import Achievement from './components/Achievement'; // Importing Achievement component
import Footer from './components/Footer'; // Importing Footer component
import './index.css'; // Ensure you import your CSS file here

function App() {
  return (
    <div style={styles.container}>
      <Navbar />
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="certifications">
        <Certification />
      </section>
      <section id="achievements">
        <Achievement />
      </section>
      <Footer /> {/* Add the Footer component here */}
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#181818',
    color: '#e1e1e6',
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    minHeight: '100vh',
  },
};

export default App;
