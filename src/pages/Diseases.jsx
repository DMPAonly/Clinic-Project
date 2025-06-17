import { useEffect } from "react";

function Diseases(){
    useEffect(() => {
        document.title = "List of Diseases";
        const cards = document.querySelectorAll('.card');
        const handlers = [];

        cards.forEach(card => {
            const handleClick = () => {
                const isExpanded = card.classList.contains('expanded');
                card.classList.toggle('expanded');
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
        <>
        <style>
        {`
            body {
                background-color: #e9f5d9; /* Light green background */
                color: #2d5a00; /* Dark green text */
                /* padding: 1rem 1rem; */
                min-height: 100vh;
                display: flex;
                flex-direction: column;
                box-sizing: border-box;
            }
            main {
                font-family: 'Poppins', sans-serif;
                flex-grow: 1;
                padding: 1rem 1rem;
                width: 100%;
                box-sizing: border-box;
            }

            .cards-container {
                display: grid;
                grid-template-columns: 1fr;
                gap: 1rem;
                width: 100%;
            }

            @media(min-width: 600px){
                .cards-container {
                grid-template-columns: 1fr 1fr;
                }
            }

            .card {
                background: white;
                border-radius: 12px;
                padding: 1rem 1rem 1.2rem 1rem;
                box-shadow: 0 3px 10px rgba(71,171,20,0.2);
                opacity: 0;
                transform: translateY(20px);
                animation: fadeUp 0.5s ease forwards;
                cursor: pointer;
                user-select: none;
                position: relative;
                overflow: hidden;
                transition: max-height 0.4s ease, box-shadow 0.4s ease;
                max-height: 105px;
                display: flex;
                gap: 0.75rem;
                align-items: flex-start;
                width: 100%;
                box-sizing: border-box;
            }

            .card.expanded {
                max-height: 400px;
                box-shadow: 0 6px 20px rgba(71,171,20,0.4);
            }

            .card .icon {
                flex-shrink: 0;
                width: 36px;
                height: 36px;
                background-color: #47ab14;
                border-radius: 50%;
                color: white;
                font-size: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                user-select: none;
                margin-top: 4px;
            }

            .card-content {
                flex-grow: 1;
            }

            .card h2 {
                margin: 0 0 1rem 0;
                font-weight: 600;
                font-size: 1.1rem;
                color: #2d5a00;
            }

            .card p.subtitle {
                margin: 0;
                font-size: 0.9rem;
                color: #3c7524;
                line-height: 1.3;
            }

            .card p.details {
                margin-top: 0.8rem;
                font-size: 0.88rem;
                color: #264100;
                line-height: 1.4;
                display: none;
            }

            .card.expanded p.details {
                display: block;
            }

            @keyframes fadeUp {
                to {
                opacity: 1;
                transform: translateY(0);
                }
            }
        `}
        </style>
        <main>
            <section className="cards-container" aria-label="Electro Homeopathy Disease Cards" role="list">
                <article className="card" role="listitem" style={{ animationDelay: '0.05s' }} tabIndex="0" aria-expanded="false" aria-controls="d1-details">
                <div className="icon" aria-hidden="true">🩺</div>
                <div className="card-content">
                    <h2>गुर्दे फेल होना</h2>
                    <p className="subtitle">गुर्दे की कार्यक्षमता में कमी और गंभीर स्थिति।</p>
                    <p className="details" id="d1-details">गुर्दे की विफलता शरीर के विषाक्त पदार्थों के जमा होने का कारण बनती है, जिससे स्वास्थ्य गंभीर रूप से प्रभावित होता है। इलेक्ट्रो होम्योपैथिक उपचार से गुर्दे के कार्य में सुधार लाया जा सकता है।</p>
                </div>
                </article>

                <article className="card" role="listitem" style={{ animationDelay: '0.1s' }} tabIndex="0" aria-expanded="false" aria-controls="d2-details">
                <div className="icon" aria-hidden="true">💎</div>
                <div className="card-content">
                    <h2>गुर्दे की पथरी</h2>
                    <p className="subtitle">गुर्दे में ठोस क्रिस्टलीय जमा।</p>
                    <p className="details" id="d2-details">पथरी गुर्दे में दर्द और संक्रमण का कारण बनती हैं। उपचार में पथरी को घोलने और निकासी में सहायता की जाती है।</p>
                </div>
                </article>

                <article className="card" role="listitem" style={{ animationDelay: '0.15s' }} tabIndex="0" aria-expanded="false" aria-controls="d3-details">
                <div className="icon" aria-hidden="true">💇‍♂️</div>
                <div className="card-content">
                    <h2>बाल झड़ना</h2>
                    <p className="subtitle">बालों का अत्यधिक गिरना।</p>
                    <p className="details" id="d3-details">समय रहते इलाज से हेयर फॉल को रोका जा सकता है और बालों की वृद्धि को प्रोत्साहित किया जा सकता है।</p>
                </div>
                </article>

                <article className="card" role="listitem" style={{ animationDelay: '0.2s' }} tabIndex="0" aria-expanded="false" aria-controls="d4-details">
                <div className="icon" aria-hidden="true">🩹</div>
                <div className="card-content">
                    <h2>सोरियसिस</h2>
                    <p className="subtitle">त्वचा पर खुजली और लाल चकत्ते।</p>
                    <p className="details" id="d4-details">यह त्वचा की एक पुरानी स्थिति है जो त्वचा को प्रभावित करती है। इलेक्ट्रो होम्योपैथिक उपचार से लक्षण कम किए जा सकते हैं।</p>
                </div>
                </article>

                <article className="card" role="listitem" style={{ animationDelay: '0.25s' }} tabIndex="0" aria-expanded="false" aria-controls="d5-details">
                <div className="icon" aria-hidden="true">⚪</div>
                <div className="card-content">
                    <h2>सफ़ेद दाग</h2>
                    <p className="subtitle">त्वचा में सफेद रंग के दाग।</p>
                    <p className="details" id="d5-details">त्वचा के रंग में बदलाव की समस्या, जिसे विटिलिगो भी कहा जाता है। उपचार से दाग कम हो सकते हैं।</p>
                </div>
                </article>

                <article className="card" role="listitem" style={{ animationDelay: '0.3s' }} tabIndex="0" aria-expanded="false" aria-controls="d6-details">
                <div className="icon" aria-hidden="true">🧬</div>
                <div className="card-content">
                    <h2>लिवर के रोग</h2>
                    <p className="subtitle">यकृत की समस्याएं और कार्यक्षमता की कमी।</p>
                    <p className="details" id="d6-details">यकृत की क्षति या सूजन के कारण स्वास्थ्य प्रभावित होता है। उपचार से लिवर की कार्यक्षमता सुधारी जा सकती है।</p>
                </div>
                </article>

                <article className="card" role="listitem" style={{ animationDelay: '0.35s' }} tabIndex="0" aria-expanded="false" aria-controls="d7-details">
                <div className="icon" aria-hidden="true">🪨</div>
                <div className="card-content">
                    <h2>पित्ताशय की पथरी</h2>
                    <p className="subtitle">गालब्लेडर में पत्थर जमा होना।</p>
                    <p className="details" id="d7-details">पित्ताशय पथरी से दर्द और पाचन समस्याएँ हो सकती हैं। उपचार से पथरी को कम किया जा सकता है।</p>
                </div>
                </article>

                <article className="card" role="listitem" style={{ animationDelay: '0.4s' }} tabIndex="0" aria-expanded="false" aria-controls="d8-details">
                <div className="icon" aria-hidden="true">💓</div>
                <div className="card-content">
                    <h2>रक्तचाप की समस्याएँ</h2>
                    <p className="subtitle">उच्च या निम्न रक्तचाप से जुड़ी परेशानियाँ।</p>
                    <p className="details" id="d8-details">रक्तचाप संतुलन न होने से दिल और अन्य अंग प्रभावित होते हैं। उपचार रक्तचाप नियंत्रित करती है।</p>
                </div>
                </article>

                <article className="card" role="listitem" style={{ animationDelay: '0.45s' }} tabIndex="0" aria-expanded="false" aria-controls="d9-details">
                <div className="icon" aria-hidden="true">🩸</div>
                <div className="card-content">
                    <h2>डायबीटीज</h2>
                    <p className="subtitle">शरीर में रक्त शर्करा का असंतुलन।</p>
                    <p className="details" id="d9-details">ब्लड शुगर की समस्या जिसे नियंत्रित करने के लिए इलेक्ट्रो होम्योपैथिक दवाओं का उपयोग होता है।</p>
                </div>
                </article>

                <article className="card" role="listitem" style={{ animationDelay: '0.5s' }} tabIndex="0" aria-expanded="false" aria-controls="d10-details">
                <div className="icon" aria-hidden="true">🧠</div>
                <div className="card-content">
                    <h2>मनोरोग</h2>
                    <p className="subtitle">मानसिक स्वास्थ्य से जुड़ी समस्याएं।</p>
                    <p className="details" id="d10-details">मानसिक तनाव और विकृति को सुधारने का उपचार।</p>
                </div>
                </article>

                <article className="card" role="listitem" style={{ animationDelay: '0.55s' }} tabIndex="0" aria-expanded="false" aria-controls="d11-details">
                <div className="icon" aria-hidden="true">🤕</div>
                <div className="card-content">
                    <h2>लकवा</h2>
                    <p className="subtitle">मस्तिष्क विकार से शरीर के हिस्सों में लकवा ग्रस्त होना।</p>
                    <p className="details" id="d11-details">शरीर के संयोगों का लकवे से बंद होना। उपचार से हल्का करने में सहायता।</p>
                </div>
                </article>

                <article className="card" role="listitem" style={{ animationDelay: '0.6s' }} tabIndex="0" aria-expanded="false" aria-controls="d12-details">
                <div className="icon" aria-hidden="true">🤕</div>
                <div className="card-content">
                    <h2>माइग्रेन</h2>
                    <p className="subtitle">तेज सिरदर्द और चक्कर आने की समस्या।</p>
                    <p className="details" id="d12-details">सिर के पक्ष में दर्द जो बार-बार होता है। उपचार से राहत मिलती है।</p>
                </div>
                </article>

                <article className="card" role="listitem" style={{ animationDelay: '0.65s' }} tabIndex="0" aria-expanded="false" aria-controls="d13-details">
                <div className="icon" aria-hidden="true">🎗️</div>
                <div className="card-content">
                    <h2>कैंसर</h2>
                    <p className="subtitle">शरीर में असामान्य कोशिका वृद्धि।</p>
                    <p className="details" id="d13-details">असभ्य कोशिकाओं का तेजी से बढ़ना। अतिरिक्त उपचार में सहायता कर सकता है।</p>
                </div>
                </article>

                <article className="card" role="listitem" style={{ animationDelay: '0.7s' }} tabIndex="0" aria-expanded="false" aria-controls="d14-details">
                <div className="icon" aria-hidden="true">👨‍⚕️</div>
                <div className="card-content">
                    <h2>प्रोस्टेट का बढ़ना</h2>
                    <p className="subtitle">प्रोस्टेट ग्रंथि का असामान्य रूप से बढ़ना।</p>
                    <p className="details" id="d14-details">पुरुषों में मूत्र संबंधी समस्याओं का कारण। उपचार से नियंत्रण में सहायता।</p>
                </div>
                </article>

                <article className="card" role="listitem" style={{ animationDelay: '0.75s' }} tabIndex="0" aria-expanded="false" aria-controls="d15-details">
                <div className="icon" aria-hidden="true">🦋</div>
                <div className="card-content">
                    <h2>थायराइड के रोग</h2>
                    <p className="subtitle">थायराइड ग्रंथि से संबंधित रोग।</p>
                    <p className="details" id="d15-details">हार्मोन असंतुलन से उत्पन्न रोग। उपचार से लक्षण कम होते हैं।</p>
                </div>
                </article>

                <article className="card" role="listitem" style={{ animationDelay: '0.8s' }} tabIndex="0" aria-expanded="false" aria-controls="d16-details">
                <div className="icon" aria-hidden="true">🦵</div>
                <div className="card-content">
                    <h2>जोड़ों का दर्द</h2>
                    <p className="subtitle">हड्डियों और जोड़ों में दर्द और सूजन।</p>
                    <p className="details" id="d16-details">सामान्य उम्र वृद्धि या चोट से जुड़ा दर्द। उपचार से सुधार।</p>
                </div>
                </article>

                <article className="card" role="listitem" style={{ animationDelay: '0.85s' }} tabIndex="0" aria-expanded="false" aria-controls="d17-details">
                <div className="icon" aria-hidden="true">🧴</div>
                <div className="card-content">
                    <h2>त्वचा समस्याएँ</h2>
                    <p className="subtitle">त्वचा से संबंधित विभिन्न रोग।</p>
                    <p className="details" id="d17-details">खाज, दाने, खुजली जैसे लक्षणों का उपचार।</p>
                </div>
                </article>

                <article className="card" role="listitem" style={{ animationDelay: '0.9s' }} tabIndex="0" aria-expanded="false" aria-controls="d18-details">
                <div className="icon" aria-hidden="true">🌬️</div>
                <div className="card-content">
                    <h2>दमा</h2>
                    <p className="subtitle">फेफड़ों में सांस लेने में समस्या।</p>
                    <p className="details" id="d18-details">सांस फूलना और एलर्जी संबंधी समस्या। उपचार से सुधार।</p>
                </div>
                </article>

                <article className="card" role="listitem" style={{ animationDelay: '0.95s' }} tabIndex="0" aria-expanded="false" aria-controls="d19-details">
                <div className="icon" aria-hidden="true">🦶</div>
                <div className="card-content">
                    <h2>अर्थराइटिस</h2>
                    <p className="subtitle">जोड़ों की सूजन और कठोरता।</p>
                    <p className="details" id="d19-details">संयुक्त हड्डी के दर्द और सूजन का कारण। उपचार से राहत।</p>
                </div>
                </article>

                <article className="card" role="listitem" style={{ animationDelay: '1.0s' }} tabIndex="0" aria-expanded="false" aria-controls="d20-details">
                <div className="icon" aria-hidden="true">🍬</div>
                <div className="card-content">
                    <h2>मधुमेह</h2>
                    <p className="subtitle">रक्त में शर्करा का उच्च स्तर।</p>
                    <p className="details" id="d20-details">शुगर की समस्या जिसे नियंत्रित किया जाता है।</p>
                </div>
                </article>

                <article className="card" role="listitem" style={{ animationDelay: '1.05s' }} tabIndex="0" aria-expanded="false" aria-controls="d21-details">
                <div className="icon" aria-hidden="true">🥚</div>
                <div className="card-content">
                    <h2>ओवरी की सिस्ट</h2>
                    <p className="subtitle">अंडाशय में सिस्ट का गठन।</p>
                    <p className="details" id="d21-details">महिलाओं में हार्मोन असंतुलन की समस्या। उपचार में सहायता।</p>
                </div>
                </article>

                <article className="card" role="listitem" style={{ animationDelay: '1.1s' }} tabIndex="0" aria-expanded="false" aria-controls="d22-details">
                <div className="icon" aria-hidden="true">👶</div>
                <div className="card-content">
                    <h2>बांझपन की गोत</h2>
                    <p className="subtitle">निषेचन में समस्या।</p>
                    <p className="details" id="d22-details">शादीशुदा जोड़ों में संतान प्राप्ति में कठिनाई। उपचार से उम्मीद।</p>
                </div>
                </article>

                <article className="card" role="listitem" style={{ animationDelay: '1.15s' }} tabIndex="0" aria-expanded="false" aria-controls="d23-details">
                <div className="icon" aria-hidden="true">🩹</div>
                <div className="card-content">
                    <h2>पाइल्स</h2>
                    <p className="subtitle">मलाशय की शिराओं में सूजन।</p>
                    <p className="details" id="d23-details">मलद्वार में दर्द और खुजली। उपचार से आसानी।</p>
                </div>
                </article>

                <article className="card" role="listitem" style={{ animationDelay: '1.2s' }} tabIndex="0" aria-expanded="false" aria-controls="d24-details">
                <div className="icon" aria-hidden="true">✂️</div>
                <div className="card-content">
                    <h2>फिशर</h2>
                    <p className="subtitle">मलाशय के आसपास फटने वाली चोट।</p>
                    <p className="details" id="d24-details">मलाशय का फटना जो दर्दनाक होता है। उपचार से ठीक होती है।</p>
                </div>
                </article>

                <article className="card" role="listitem" style={{ animationDelay: '1.25s' }} tabIndex="0" aria-expanded="false" aria-controls="d25-details">
                <div className="icon" aria-hidden="true">❤️</div>
                <div className="card-content">
                    <h2>सेक्स सम्बंधित समस्याएँ</h2>
                    <p className="subtitle">यौन स्वास्थ्य से जुड़ी परेशानियाँ।</p>
                    <p className="details" id="d25-details">यौन उत्पीड़न और समस्याओं का समाधान। इलाज से मदद मिलती है।</p>
                </div>
                </article>
            </section>
        </main>
        </>
    )
}

export default Diseases;