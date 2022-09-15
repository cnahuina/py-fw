import React from "react";
import { Layout } from "../../components/Layout";
import { Card } from "./components/Card";
import { CardButton } from "./components/CardButton";
import { CardBanner } from "./components/CardBanner";
import { CardResume } from "./components/CardResume";
import { CardWellcome } from "./components/CardWellcome";


import banner1 from "./../../assets/banner1.png"
import banner2 from "./../../assets/banner2.png"

import today1 from "./../../assets/today1.png"
import today2 from "./../../assets/today2.png"

import food1 from "./../../assets/food1.png"
import food2 from "./../../assets/food2.png"
import food3 from "./../../assets/food3.png"

import shop from "./../../assets/shop.png"
import blog from "./../../assets/blog.png"
import podcast from "./../../assets/podcast.png"

import avatar from "./../../assets/avatar.png"


export const TodayViewController = () => {
    return (
        <Layout>
            <div className="container">
                <CardWellcome 
                    name={"Sarah"}
                    complement={"it’s a low cab day"}
                />
            </div>
            <div className="container item">
                <CardButton 
                    tag={"Add Watter"}
                />
                <CardButton 
                    tag={"Fasting Timer"}
                />
            </div>
            <div className="container">
                <CardResume 
                    avatar={avatar}
                    name={"Sarah M."}
                    job={"Your Expert Coach"}
                    url={"/profile"}
                />
            </div>
            <div className="containerCarrousel">
                <h1>Today’s Plan</h1>
                <div className="carrouselBanner">
                    <CardBanner 
                        image={today1}
                        title={"Squat Band"}
                        description={"12 - 15 min"}
                    />
                    <CardBanner 
                        image={today2}
                        title={"Plank"}
                        description={"8 - 10 min"}                    />
                </div>
               
            </div>
            <div className="containerCarrousel">
                <h1>Nutrition</h1>
                <div className="carrouselBanner">
                    <CardBanner 
                        image={food1}
                        title={"Breakfast"}
                        description={"260 kcal"}
                    />
                    <CardBanner 
                        image={food2}
                        title={"Fruit Diet"}
                        description={"150 kcal"}
                    />
                     <CardBanner 
                        image={food3}
                        title={"Snack"}
                        description={"185 kcal"}
                    />
                </div>
               
            </div>
            <div className="containerCarrousel">
                <h1>Quick Links</h1>
                <div className="carrouselBanner">
                    <CardBanner 
                        image={banner1}
                        title={"Introducing.. FASTer Way Concierge"}
                    />
                    <CardBanner 
                        image={banner2}
                        title={"Take 5 With the FASTer"}
                    />
                </div>
               
            </div>
            <div className="containerFull">
                <div className="asideMenu">
                    <Card
                        image={shop}
                        description="Shop"
                    />
                    <Card
                        image={blog}
                        description="Blog"
                    />
                    <Card
                        image={podcast}
                        description="Podcast"
                    />
                </div>
            </div>
        </Layout>
    );
};
