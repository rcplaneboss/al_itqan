import Heading from "./Heading";
import Logo from './assets/Img/logo1.jfif'
import flyer from './assets/Img/flyer.jfif'
import Link from "./Link";

const Contact = () => {
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
        <div className="contact-section">
            <Heading text={"Contact Us"}  id={"contact"}/>
            <div className="contact-container">
                <ul className="contact-details">
                    <li className="fisrt-li">
                        <Heading text={"You can contact Us Through"} />
                    </li>
                    {Contact.map((contact) => (
                        <div className="contact-items">
                          
                            <div className="contact-link open-sans">
                            <span className={`fa fa-${contact.icon}`} ></span> 
                                <Link link={contact.link} text={contact.type} />
                            </div>
                        </div>
                    ))
                    }
                </ul>
                <div className="al-itqan-logo"><img src={flyer} alt="" /></div>
                <div className="al-itqan-logo"><img src={Logo} alt="" /></div>
            </div>
        </div>
    );
}

export default Contact;