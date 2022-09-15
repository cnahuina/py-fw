import { Fragment } from "react";

export const Card = (props) => {
    const {
        image,
        description
    } = props;

    return (
        <Fragment>
            <div className="cardComponent">
                <img src={image} alt="Image" />
                <p>{description}</p>
            </div>
        </Fragment>
    );
}