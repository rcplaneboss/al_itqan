import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

const RegSucc = ({ heading, body }) => {

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

    return (
        <div className="reg-succ-box">
            <div className="reg-succ-inn-box">
                <h1 className="success montserrat">{heading}</h1>
                <div className="succ-body open-sans">{body}</div>
            </div>
                <div className={isMobile ? "mobile-regsiter-button-box montserrat" : 'tab-regsiter-button-box montserrat'}>
                    <Link to="/">Homepage</Link>
                </div>
        </div>
    );
}

export default RegSucc;