import { Fragment } from "react";
import image from "./../../../assets/girl.png"

export const CardWellcome = (props) => {
    const {
        name,
        complement
    } = props;

    return (
        <Fragment>
            <div className="cardWellcomeComponent">
                <div className="title">
                    <span>
                        <h2>Hi {name},</h2>
                        <h3>{complement}</h3>
                    </span>
                </div>
                <img src={image} alt="image" />
            </div>
        </Fragment>
    );
}