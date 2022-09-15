import { Children, Fragment } from "react";

export const CardBanner = (props) => {
    const {
        image,
        description,
        title
    } = props;

    return (
        <Fragment>
            <div className="cardBannerComponent">
                <img src={image} alt="Image" />
               <div className="text">
                    <h5>{title}</h5>
                    <span>{description}</span>
               </div>
            </div>
        </Fragment>
    );
}