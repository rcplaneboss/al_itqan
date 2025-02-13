const Image = ({ image }) => {
    return ( 
        <div className="image-container" >
            <img src={ image } alt="" className="image"/>
        </div>
     );
}
 
export default Image;