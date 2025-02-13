import Heading from "./Heading";
import LandscapeCardBody from "./LandscapeCardBody";
import aboutVideo from './assets/about.mp4';
import Link from "./Link";
import Button from "./Button";

const About = () => {
    return (
        <div className="about-section">
            <Heading text={"About Us"} id={"about"} />
            <LandscapeCardBody body={"Short Overview About Al-Itqan"} />
            <div className="about-flex">
                <div className="about-text">
                    <LandscapeCardBody body='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique architecto dolorum sapiente voluptate optio debitis assumenda quisquam minus quaerat eum vitae doloribus eveniet, accusamus incidunt in excepturi facilis cumque totam.' />
                    <LandscapeCardBody body='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique architecto dolorum sapiente voluptate optio debitis assumenda quisquam minus quaerat eum vitae doloribus eveniet, accusamus incidunt in excepturi facilis cumque totam.' />
                    <button><Button text='Talk to Us On Whatsapp' link='https://wa.me/2349078498281?text=Assalam%20aleikum%20warahmatullahi%20wabarakatuh,%20from%20Alalitqan%20Website.' /></button>
                    <div className="about-call montserrat">
                        Or
                        Call <span className="montserrat">+2349161591133</span>
                    </div>
                </div>
                <video src={aboutVideo} className="about-video" controls loop></video>
            </div>
            <div className="whatsapp-box">
            </div>

        </div >

    );
}

export default About;