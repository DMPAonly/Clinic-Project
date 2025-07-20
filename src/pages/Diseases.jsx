import { useEffect } from "react";
import style from "../assets/diseases.module.css";
import diseases from "../assets/diseases";

function Diseases(){
    const diseaseList = diseases;

    useEffect(() => {
        document.title = "List of Diseases";
        const cards = document.querySelectorAll("article");
        const handlers = [];

        cards.forEach(card => {
            const handleClick = () => {
                console.log("Click");
                const isExpanded = card.classList.contains(style.expanded);
                card.classList.toggle(style.expanded);
                card.setAttribute('aria-expanded', !isExpanded);
            };

            const handleKeyDown = (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleClick();
                }
            };

            card.addEventListener('click', handleClick);
            card.addEventListener('keydown', handleKeyDown);

            handlers.push({ card, handleClick, handleKeyDown });
        });
        // Clean up when unmounting
        return () => {
            handlers.forEach(({ card, handleClick, handleKeyDown }) => {
            card.removeEventListener('click', handleClick);
            card.removeEventListener('keydown', handleKeyDown);
        });
    };
    }, []); // Empty dependency array → runs once on mount

    return (
        <main>
            <section className={style.cardsContainer} aria-label="Electro Homeopathy Disease Cards" role="list">
                {diseaseList.map((dis, i) => {
                    return (
                        <article key={i} className={style.card} role="listitem" style={{ animationDelay: '0.05s' }} tabIndex="0" aria-expanded="false" aria-controls={`d${i+1}-details`}>
                            <div className={style.icon} aria-hidden="true">{dis.icon}</div>
                            <div className={style.cardContent}>
                                <h2>{dis.hindiTitle}</h2>
                                <p className={style.subtitle}>{dis.hindiSubtitle}</p>
                                <p className={style.details} id={`d${i+1}-details`}>{dis.hindiDetails}</p>
                            </div>
                        </article>
                    );
                })}
            </section>
        </main>
    )
}

export default Diseases;