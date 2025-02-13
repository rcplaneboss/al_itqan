
function Name({name, src}) {
    return (
        <div className="logo-name-section">
            <div className="logo" style={{color: "white", fontSize: "40px", fontWeight: "bold", textAlign: "center"}}><img src={src} alt="" style={{color: "white", width: "50px", height: "50px"}} /></div>
            <div className="name montserrat">{name}</div>
        </div>
    )
}

export default Name