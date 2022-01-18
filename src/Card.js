import React from "react";

const Card = (props) => {
    return (
        <div className="col-4">
            <div className="card" style={{ width: "18rem" }}>
                <img
                    src= {props.src}
                    className="card-img-top"
                    alt="..."
                />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">
                        {props.info}
                    </p>
                    <a href="#" className="btn btn-success">{props.button}</a>
                </div>
            </div>
        </div>
    );
}

export default Card;