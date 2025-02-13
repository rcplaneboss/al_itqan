import Heading from "./Heading";
import LandscapeCardBody from "./LandscapeCardBody";
import Link from "./Link"
import logo from "./assets/Img/logo2.svg"
import Name from "./Name"
import ceo from './assets/Img/arabic-script.jpg'
import { useMediaQuery } from "react-responsive";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
    const isTab =  useMediaQuery({query: '(max-width: 767px)'});
    const abouttext = 'Al-Itqan is an online  learning  platform whose job is to teach you Qur’an and other islamic subjects such as, Tejweed, Arabic, Seerah and many more.'

    const founderDescription1 = 'He is an expert in teaching both Qur’an with Tejweed and Arabiyyah modernly.'
    const founderDescription2 = 'He has memorize the noble Qur’an and is talented with reading It.'

    const Contact = [
        {
            type: 'WhatsApp',
            link: 'https://wa.me/2349078498281?text=Assalam%20aleikum%20warahmatullahi%20wabarakatuh,%20from%20Alalitqan%20Website.',
            icon: 'fa fa-phone'
        },
        {
            type: 'Facebook',
            link: 'https://www.facebook.com/profile.php?id=100083208477116&mibextid=ZbWKwL',
            icon: 'fa fa-user'
        },
        {
            type: 'Email Us',
            link: 'mailto:alitqanonlineschool@gmail.com',
            icon: 'fa fa-user'
        }
    ]
    return (
        <div className="footer" id="footer-container" >
            <div className="footer-box" >
                <div className="name-box">
                    <Name name={"AL-ITQÃN"} src={logo}/>
                    <p className="tagline open-sans">
                        ...beneficial knowlegde is key to guidiance
                    </p>
                </div>
                <div className="about-us-box" id="about-us-box-id">
                    <Heading text={"About Us"} />
                    <LandscapeCardBody body={abouttext} />
                </div>
                <div className="contact-us-box" id="contact-us-box-id">
                    <Heading text={"Contact Us"} />
                    {Contact.map((contact) => (
                        <div className="contact-items">
                            <div className="contact-link open-sans">
                              <span className={`fa fa-${contact.icon}`} id="links-click"></span>  <Link link={contact.link} text={contact.type} />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="founder-box">
                    <Heading text={"Coordinator/Founder"} />
                    <div className="founder-img-box"><img src={ceo} alt="arabic-script" /></div>
                    <Heading text={"Abu Khodeejah Al-waro'iy"} />
                    <LandscapeCardBody body={founderDescription1} />
                    <LandscapeCardBody body={founderDescription2} />
                </div>
            </div>
            <div className="copy-right-box montserrat">
                {/* Designed and Developed by Axiom Concept.    Tel: +2347085544064 */}
            </div>
            <div className="copy-right-box montserrat">
                <RouterLink to='/admin-panel' >Admin panel</RouterLink>
                <br />
                Copyright 2024 &copy; Al-alitqan online school. All rights reserved.
            </div>
        </div>
    );
}

export default Footer;