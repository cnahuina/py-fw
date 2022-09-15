import React from "react";
import btnBack from "./../../assets/btn-back.svg"

export const BackNavigation = () => {
    return (
        <div className="backNavComponent">
            <a href="/">
                <img src={btnBack} alt="" width={32} />
            </a>
        </div>
    );
};
