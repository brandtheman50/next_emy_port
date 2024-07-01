import React from 'react';
import './PageHeader.css';

export const PageHeader = ({ firstTitle, secondTitle, introTitle, introP, introBtn, introImg }) => {
    return (
        <section className="container dark-blue">
            <div className="section-content">
                <div className="title"><span className="ui-title">{firstTitle}</span><span className="designer-title">{secondTitle}</span></div>
                <div className="introduction-cont">
                    <div className="introduction">
                        <h2>{introTitle}</h2>
                        <p>{introP}</p>
                        <a className="purple-btn" href="/">{introBtn}</a>
                    </div>
                    {introImg ? <div className="profile-img-cont">
                        <img src={introImg}/>
                    </div> : null}
                </div>
            </div>
        </section>
    )
}