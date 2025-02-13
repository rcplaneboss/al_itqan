import { useMediaQuery } from "react-responsive"
import Image from "./Img"
import logo from './assets/Img/logo-png.png'

const Description = () => {
    const text = "Learn how to read and memorize Qur'an online with ease."
    const descr1 = "An intensive online school for you to start reading Qur’an fluently and memorizing it along the way. "
    const descr2 = "We also have an intensive classes for learning Arabic and Islamic Studies."
    const viewportTab = useMediaQuery({query: '(min-width: 767px)'});
    const viewportTabStyle = {
        fontWeight: 400,
        fontSize: 2.5 + 'em'
    }
    return (
        <div className="description">
            <div className="header-logo">
                <Image image={logo} />
                <h1 className="noto" style={{
                    margin: 0,
                    padding: 0,
                    color: "white",
                    width: 100 + "%",
                    fontSize: 1.5 + 'em',
                }}>الإتقان المدرسة الشبكية لتحفيظ القرآن وتعليم الدّراسات العربيّة والإسلاميّة</h1>
            </div>

            <div className="header-text montserrat" style={viewportTab ? viewportTabStyle : { fontWeight: 400, fontSize: 2.5 + 'em'}}>
                Learn how to read and memorize <span className="quran-text">Qur'an</span>  online with ease.

            </div>
            <p className="descr open-sans">
                {descr1}
            </p>
            <p className="descr open-sans">
                {descr2}
            </p>
        </div>
    );
}

export default Description;