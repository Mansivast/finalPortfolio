// src/components/Projects.js
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import '../index.css'; // Import your CSS file

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const querySnapshot = await getDocs(collection(db, "projects"));
      setProjects(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchProjects();
  }, []);

  return (
    <div className="projects-container">
      <h2 className="project-title">Projects</h2> {/* Centered title */}
      <div className="project-list">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <img src={project.image} alt={project.title} className="project-image" />
            <p>{project.description}</p>
            {/* <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-link">View Project</a> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
