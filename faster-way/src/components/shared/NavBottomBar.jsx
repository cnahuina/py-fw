import React, { Fragment } from "react";
import home from "./../../assets/home.svg"
import nutrition from "./../../assets/nutrition.svg"
import studio from "./../../assets/studio.svg"
import collections from "./../../assets/collections.svg"
import profile from "./../../assets/profile.svg"

export const NavBottomBar = () => {
    return (
        <Fragment>
            <div className="NavBottomBar">
                <ul>
                    <li><a href="#"><img src={home} alt="" />Today</a></li>
                    <li><a href="#"><img src={nutrition} alt="" />Nutrition</a></li>
                    <li><a href="#"><img src={studio} alt="" />Studio</a></li>
                    <li><a href="#"><img src={collections} alt="" />Collections</a></li>
                    <li><a href="#"><img src={profile} alt="" />Profile</a></li>
                </ul>
            </div>
        </Fragment>
    );
};
