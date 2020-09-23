import React from "react";
import profilePicture from "../../../static/assets/images/bio/headshot.jpg";

export default function () {
    return (
        <div className="content-page-wrapper">
            <div
                className="left-column"
                style={{
                    background: "url(" + profilePicture + ") no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            />
            <div className="right-column">
                <p>Mike Molinos is a tech professional and an avid full-stack web application developer living in Utah County’s silicone slopes. His interest in the tech industry started in 2002 when he completed his AS degree in information technology He complemented that tech passion with entrepreneurial tendencies upon earning his Business degree from Brigham Young University.</p>
                <p>Mike is proficient in HTML5, CSS3, JavaScript, JSX, Axios, SCSS/SASS, Flexbox, CSS Grid, ReactJS, Git, MySQL, ASP.Net, MVC, Crud, Visual Studio Code, Postman, Heroku, GitHub, and Adobe Photoshop & Illustrator. He has experience integrating third-party APIs and DOM manipulations in responsive development projects.</p>
            </div>
        </div>
    );
}