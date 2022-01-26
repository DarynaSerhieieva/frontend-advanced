import React from "react";
import Star from "./star";

import './style/Skills.css'

export const Skills = () => {
    const tools = [
        {
            name: 'Adobe Photoshop',
            img: './img/ph.svg',
            skill: 4
        },
        {
            name: 'Adobe Illustrator',
            img: './img/all.svg',
            skill: 3
        },
        {
            name: 'Adobe After Effects',
            img: './img/aae.svg',
            skill: 4
        },
        {
            name: 'Figma',
            img: './img/figma.svg',
            skill: 4
        }
    ];
    return(
        <section className="wrapper">
            <div className="skills">
                <h2 className="heading">Skills</h2>
                <p>I work in such programs as</p>
                <div className="skills__tools">
                        {
                            tools.map(e => {
                                return(
                                    <div className="skills__item">
                                        <img src={e.img} alt={e.name}/>
                                        <p className="skills__name">{e.name}</p>
                                        <Star number={e.skill}/>
                                    </div>
                                )
                            })
                        }
                </div>
            </div>
        </section>
        
        
    );
};
