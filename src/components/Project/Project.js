import React from 'react';
import './Project.scss';
import {Link} from 'react-router-dom';

function Project({info}) {
  return (
    <div className='project'>
        <div className='project__heading'>
            <img className='project__icon' src={info.icon}/>
            <p className='project__title'>{info.title}</p>
        </div>
        {info.video && 
            <iframe className='project__video' src={info.video} title={info.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowFullScreen"></iframe>}
        {info.image &&
            <a className='project__view-link' href={info.view} target="_blank" >
                <img className="project__image" src={info.image} />
            </a>}
        {info.image01 &&
             <a className='project__view-link' href={info.view} target="_blank" >
                <div className='project__mobile-image-container'>
                    <img className="project__image01" src={info.image01} />
                    <img className="project__image01" src={info.image02} />
                    <img className="project__image01" src={info.image03} />
                </div>
            </a>    
        }
        <p className='project__view'>
            <a className='project__view-display button' href={info.view} target="_blank"> View </a>
        </p>
        <p className="project__tech">
            <span className="project__tech-label">Tech Stack:&nbsp;</span>
            <span className="project__tech-stack">{info.tech}</span>
        </p>
        <div className="project__source-code-container">
            {info.repos[0] &&
                <a 
                    target="__blank"
                    className="project__repo button"
                    href={info.repos[0]}>
                      
                    Client Repo
                </a> 
            }
            {info.repos[1] &&
                <a 
                    target="__blank"
                    className="project__repo button"
                    href={info.repos[1]}>
                        Server Repo
                </a> 
            }
            {info.apple &&
                <a 
                    target="__blank"
                    className="project__repo button"
                    href={info.apple}>
                        Apple Store
                </a> 
            }

        </div>
    </div>
  )
}

export default Project