const Card = ({ heading, para, iconClass}) => {
    return ( 
        <div className="card">
            <div className="card-icon"><span className={ iconClass }></span></div>
            <h3 className="card-heading montserrat">{ heading }</h3>
            <p className="card-text open-sans">{ para }</p>
        </div>
     );
}
 
export default Card;