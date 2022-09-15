import { Fragment } from "react";
import btnAdd from "./../../../assets/btn-add.svg"
export const CardButton = (props) => {
    const {
        action,
        tag
    } = props;

    return (
        <Fragment>
            <div className="cardButton">
                <a href={action}><img src={btnAdd} alt="Image" /></a>
                <span>{tag}</span>
            </div>
        </Fragment>
    );
}