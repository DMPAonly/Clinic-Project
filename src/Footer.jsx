function Footer() {

    return (
        <>
        <style>
            {`
                footer {
                    background-color: #47ab14;
                    padding: 4rem 2rem;
                    overflow: hidden;
                    position: relative;
                    font-size: 1rem;
                    user-select: none;
                }

                /* Sliding marquee text */
                .marquee {
                    display: inline-block;
                    white-space: nowrap;
                    animation: marqueeSlide 15s linear infinite;
                    font-weight: 600;
                    letter-spacing: 0.05em;
                    color:rgb(255, 255, 255);
                    text-transform: uppercase;
                }

                @keyframes marqueeSlide {
                    0% {
                        transform: translateX(100%);
                    }
                    100% {
                        transform: translateX(-100%);
                    }
                }

                .footer-content {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    align-items: center;
                    gap: 0.75rem;
                }

                .copyright {
                    flex: 1 1 auto;
                    color: #bbb;
                }

                .social-icons {
                    flex: 0 0 auto;
                    display: flex;
                    gap: 1rem;
                }

                .social-icons a {
                    color: #bbb;
                    font-size: 1.4rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: color 0.3s ease, transform 0.3s ease;
                    position: relative;
                }

                .social-icons a:hover {
                    color: #0d6efd;
                    transform: scale(1.3);
                    text-shadow: 0 0 8px #0d6efd;
                    z-index: 10;
                }

                /* Add subtle pulse animation on hover */
                .social-icons a:focus,
                .social-icons a:hover {
                    animation: pulseGlow 2s infinite alternate;
                    outline: none;
                }

                @keyframes pulseGlow {
                    from {
                        text-shadow: 0 0 6px #0d6efd;
                    }
                    to {
                        text-shadow: 0 0 14px #66b0ff;
                    }
                }

                @media (max-width: 480px) {
                    .footer-content {
                        flex-direction: column;
                        text-align: center;
                    }
                    .social-icons {
                        justify-content: center;
                    }
                }
        `}
  </style>
        <footer>
            <div className="footer-content">
                <div className="copyright">
                    © Family Care Electro Homeopathic Clinic
                </div>
                <div className="social-icons" aria-label="Social Media Links">
                    <a className="color-facebook" href="#" aria-label="Facebook" title="Facebook"><i className="bi bi-facebook"></i></a>
                    <a className="color-twitter" href="#" aria-label="Twitter" title="Twitter"><i className="bi bi-twitter"></i></a>
                    <a className="color-instagram" href="#" aria-label="Instagram" title="Instagram"><i className="bi bi-instagram"></i></a>
                    <a className="color-linkedin" href="#" aria-label="LinkedIn" title="LinkedIn"><i className="bi bi-linkedin"></i></a>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer;