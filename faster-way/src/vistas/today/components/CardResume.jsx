import { Fragment } from "react";

export const CardResume = (props) => {
    const {
        avatar,
        name,
        job,
        url
    } = props;

    return (
        <Fragment>
            <div className="cardResumeComponent">
                <img src={avatar} alt="avatar" />
                <div className="col">
                    <h3>{name}</h3>
                    <h5>{job}</h5>
                </div>
                <a href={url} className="btn-primary">View Bio</a>
            </div>
        </Fragment>
    );
}