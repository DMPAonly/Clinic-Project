import { useEffect, useState } from "react";
import styles from "../assets/doctors.module.css";

function DoctorsList() {

    const [docList, setDocList] = useState([]);

    useEffect(() => {
        document.title = "List of Doctors";
        setDocList([
        {
            name: "Dr. B. Singh",
            Speciality: "Family physician & gynecologist",
            description: "Specialized care for women's health & family health. Speciality in Reproductive system and related conditions." 
        },
        {
            name: "Dr. R. Kumar",
            Speciality: "Pediatrician",
            description: "Caring pediatrician specializing in child health and preventative care."
        },
        {
            name: "Dr. Bharat Chauhan",
            Speciality: "Diabetologist, Endocrologist",
            description: "Expert in diabetic & thyroid condition acute as well chronic with over 6 years of experience."
        },
        {
            name: "Dr. Anamika Tyagi",
            Speciality: "Dietitian",
            description: "Specializes in PCOD, Thyroid & Sugar."
        }
    ]);
    }, []);
    
    return (
        <main>
            <section className={styles.doctorList} aria-label="List of doctors">
                {docList.map((doc) => {
                    return (
                        <article className={styles.doctorCard} tabIndex="0">
                            <h2 className={styles.doctorName}>{doc.name}</h2>
                            <p className={styles.doctorSpecialty}>{doc.Speciality}</p>
                            <p className={styles.doctorBio}>{doc.description}</p>
                        </article>
                    );
                })}
            </section>
        </main>
    )
}

export default DoctorsList;