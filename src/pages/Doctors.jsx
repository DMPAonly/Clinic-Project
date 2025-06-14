import { useEffect } from "react";

function DoctorsList() {
    useEffect(() => {
        document.title = "List of Doctors";
    }, []);
    
    return (
        <>
        <style>
            {`
                * {
                    box-sizing: border-box;
                }

                main {
                    margin: 0;
                    font-family: 'Montserrat', sans-serif;
                    background: #f5f8fb;
                    color: #333;
                    max-width: 1200px;
                    margin: 2rem auto 4rem;
                    padding: 0 1rem;
                }
                
                .doctor-list {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 1.8rem;
                }

                .doctor-card {
                    background: white;
                    border-radius: 15px;
                    box-shadow: 0 8px 20px rgb(0 0 0 / 0.08);
                    padding: 1.8rem;
                    text-align: center;
                    opacity: 0;
                    transform: translateY(30px);
                    animation-fill-mode: forwards;
                    animation-name: fadeSlideUp;
                    animation-duration: 0.7s;
                    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
                }

                @keyframes fadeSlideUp {
                    to {
                    opacity: 1;
                    transform: translateY(0);
                    }
                }

                .doctor-photo {
                    width: 100px;
                    height: 100px;
                    margin: 0 auto 1rem;
                    border-radius: 50%;
                    object-fit: cover;
                    box-shadow: 0 5px 15px rgb(0 102 255 / 0.3);
                    border: 3px solid #66ccff;
                }

                .doctor-name {
                    font-size: 1.3rem;
                    font-weight: 600;
                    margin: 0.5rem 0 0.3rem;
                    color: #004aad;
                }

                .doctor-specialty {
                    font-size: 1rem;
                    font-weight: 500;
                    color: #0077ff;
                    margin-bottom: 0.8rem;
                }

                .doctor-bio {
                    font-size: 0.9rem;
                    color: #555;
                    line-height: 1.3;
                    margin: 0 auto;
                    max-width: 220px;
                }

                /* Animation delay for staggered effect */
                .doctor-card:nth-child(1) {
                    animation-delay: 0.15s;
                }
                .doctor-card:nth-child(2) {
                    animation-delay: 0.3s;
                }
                .doctor-card:nth-child(3) {
                    animation-delay: 0.45s;
                }
                .doctor-card:nth-child(4) {
                    animation-delay: 0.6s;
                }
                .doctor-card:nth-child(5) {
                    animation-delay: 0.75s;
                }
                .doctor-card:nth-child(6) {
                    animation-delay: 0.9s;
                }
                .doctor-card:nth-child(7) {
                    animation-delay: 1.05s;
                }
                .doctor-card:nth-child(8) {
                    animation-delay: 1.2s;
                }
            `}
        </style>
        <main>
            <section className="doctor-list" aria-label="List of doctors">
                <article className="doctor-card" tabIndex="0">
                    <h2 className="doctor-name">Dr B.singh</h2>
                    <p className="doctor-specialty">Family physician & gynecologist</p>
                    <p className="doctor-bio">
                        Specialized care for women's health, & family health. Spl in Reproductive system and related conditions.
                    </p>
                </article>

                <article className="doctor-card" tabIndex="0">
                    <h2 className="doctor-name">Dr. R. Kumar</h2>
                    <p className="doctor-specialty">Pediatrician</p>
                    <p className="doctor-bio">
                        Caring pediatrician specializing in child health and preventative care.
                    </p>
                </article>

                <article className="doctor-card" tabIndex="0">
                    <h2 className="doctor-name">Dr. Bharat Chauhan</h2>
                    <p className="doctor-specialty">Diabetologist , endocrinologist </p>
                    <p className="doctor-bio">
                        Exper in diabetic & thyroid condition acute as well cronic with over 6 yr experience.
                    </p>
                </article>

                <article className="doctor-card" tabIndex="0">
                    <h2 className="doctor-name">Dr. Anamika tyagi </h2>
                    <p className="doctor-specialty">Dietitian</p>
                    <p className="doctor-bio">
                        Specializes in PCOD , THYROID SUGAR.
                    </p>
                </article>

                <article className="doctor-card" tabIndex="0">
                    <h2 className="doctor-name">Dr. Bharat Chauhan</h2>
                    <p className="doctor-specialty">Diabetologist , endocrinologist </p>
                    <p className="doctor-bio">
                        Specializes in  diabetic & thyroid condition acute as well cronic with over 6 yr experience.
                    </p>
                </article>
            </section>
        </main>
        </>
    )
}

export default DoctorsList;