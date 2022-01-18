import React from "react";
import Card from "./Card";

const CardSection = () => {
    return (
        <section className="contact bg-success ">
            <div className="container ">
                <h2 className="text-white">
                    We love new friends!
                </h2>
                <div className="row">

                    <Card src="https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" title="Russia" info="Russia is good place"
                        button="Click Here"
                    />

                    <Card src="https://images.pexels.com/photos/3532544/pexels-photo-3532544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" title="America" info="America is cool place"
                        button="Click Here"
                    />

                    <Card src="https://images.pexels.com/photos/2522663/pexels-photo-2522663.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" title="London" info="London is too costly"
                        button="Click Here"
                    />

                </div>
            </div>
        </section>
    );
}

export default CardSection;