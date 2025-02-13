import LandscapeCardBody from "./LandscapeCardBody";
import LandscapeCardHeading from "./LandscapeCardHeading";

const LandscapeCardDescription = ({ heading, body }) => {
    return (
        <div className="landscape-card-description">
            <LandscapeCardHeading text={heading} />
            <LandscapeCardBody body={body} />
        </div>
    );
}

export default LandscapeCardDescription;