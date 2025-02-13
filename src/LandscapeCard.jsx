import LandscapeCardDescription from "./LandscapeCardDescription";
import Image from "./Img";


const LandscapeCard = ({ heading, body, number, image }) => {
    return (
        <div className="landscapecardbox">
                <div className="number-box"><div className="number oleo-script-bold">{number}</div></div>
            <div className="landscapecardinnerbox">
                <LandscapeCardDescription body={body} heading={heading} />
                <Image image={image} />
            </div>
        </div>
    );
}

export default LandscapeCard;