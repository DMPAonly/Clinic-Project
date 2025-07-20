import style from "./assets/footer.module.css";

function Footer() {
    const socials = [{
        class: style.colorFacebook,
        href: "#",
        label: "Facebook",
        title: "Facebook",
        iclass: "bi bi-facebook"
    },
    {
        class: style.colorTwitter,
        href: "#",
        label: "Twitter",
        title: "Twitter",
        iclass: "bi bi-twitter"
    },
    {
        class: style.colorInstagram,
        href: "#",
        label: "Instagram",
        title: "Instagram",
        iclass: "bi bi-instagram"
    },
    {
        class: style.colorLinkedin,
        href: "#",
        label: "Linkedin",
        title: "Linkedin",
        iclass: "bi bi-linkedin"
    }];

    return (
        <footer>
            <div className={style.footerContent}>
                <div className={style.copyright}>
                    © Family Care Electro Homeopathic Clinic
                </div>
                <div className={style.socialIcons} aria-label="Social Media Links">
                    {socials.map((social, i) => {
                        return (
                            <a key={i} className={social.class} href={social.href} aria-label={social.label} title={social.title}>
                                <i className={social.iclass}></i>
                            </a>
                        )
                    })}
                </div>
            </div>
        </footer>
    )
}

export default Footer;