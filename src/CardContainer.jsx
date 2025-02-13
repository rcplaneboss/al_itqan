import Card from "./Card";

const CardContainer = ({ features }) => {
   

    return (
        <div className="card-container">
            {
            features.map((feat)=>(
                 <Card heading={feat.heading} para={feat.para} iconClass={feat.icon} key={feat.heading}/>
                ))
            }
        </div>
    );
}

export default CardContainer;