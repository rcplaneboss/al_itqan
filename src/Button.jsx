import Link from "./Link";
const Button = ({text, link}) => {
    return (
        <button className="button-link">
            <Link text={text} link={link}/>
        </button>
    );
}

export default Button;