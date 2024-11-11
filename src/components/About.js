// src/components/About.js
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import '../index.css'; // Import your CSS file

function About() {
  const [personalInfo, setPersonalInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "personalInfo", "GEHHRQNP0UYZ5SUhUtno");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setPersonalInfo(docSnap.data());
      } else {
        console.log("No such document!");
      }
    };
    fetchData();
  }, []);

  return (
    <div className="about-section">
      {personalInfo && (
        <>
          <div className="about-content">
            <h1>{personalInfo.name}</h1>
            <p>{personalInfo.bio}</p>
            <br></br>
            <p>Email: {personalInfo.email}</p>
          </div>
          <img src={personalInfo.avatarUrl} alt="Avatar" className="about-avatar" />
        </>
      )}
    </div>
  );
}

export default About;
