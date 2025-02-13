import Button from "./Button";

const NotFound = () => {
    return (
        <div className="not-found-box">
            <div className="not-found-container">
                <div className="not-found-text">404-<span style={{fontSize: 25 + 'px'}}>Not Found</span></div>
                <div className="not-found-body">
                    That page does not exist.
                </div>
                {/* <Button text={} */}
            </div>
        </div>
    );
}

export default NotFound;