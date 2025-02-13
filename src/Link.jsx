const Link = ({text, link}) => {
    return ( 
        <div className="link-1 montserrat"><a href={link} className="anchor">{text}</a></div>
     );
}
 
export default Link;