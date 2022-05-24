import React from 'react';
import './Portfolio.scss';
import Project from '../Project/Project';

import treePadIcon from '../../assets/icons/treepadcloud-icon.svg';

import instantMemeIcon from '../../assets/images/transparent-meme-sized.png';
import instantMemeImage from '../../assets/images/instant-meme-net.png';

import instockIcon from '../../assets/images/instock-logo-square.svg';
import instockImage from '../../assets/images/instockinventory-com.png';

import movieNightIcon from '../../assets/images/ticket.svg';
import movieNightImage from '../../assets/images/movie-night-out.png';

import bandsiteIcon from '../../assets/images/music.svg';
import bandsiteImage from '../../assets/images/bandsite.png';

import relaxationTimerIcon from '../../assets/images/relaxation-timer-icon.svg';
import relaxationTimerImage01 from '../../assets/images/relaxation-timer-01.webp';
import relaxationTimerImage02 from '../../assets/images/relaxation-timer-02.webp';
import relaxationTimerImage03 from '../../assets/images/relaxation-timer-03.webp';


const portfolio = [
    {
        icon: treePadIcon,
        title: 'TreePad Cloud',
        video: 'https://www.youtube.com/embed/Bk2GCqT1wP0',
        tech: 'react, node.js, express, javascript, HTML, CSS, SASS, BEM, dropzone, multer, REST API, bcrypt, axios, jwt, knex, mysql',
        repos: ['https://github.com/michaelcalvinwood/treepad-cloud-react-dom', 'https://github.com/michaelcalvinwood/treepad-cloud-node-express']
    },
    {
        icon: relaxationTimerIcon,
        title: 'Rapid Relaxation Timer',
        view: 'https://relaxation-timer.appgalleria.com',
        image01: relaxationTimerImage01,
        image02: relaxationTimerImage02,
        image03: relaxationTimerImage03,
        tech: 'mobile app created with react, ionic, typescript, javascript, HTML, CSS, SASS',
        repos: ['https://github.com/michaelcalvinwood/ionic-relaxation-timer'],
        apple: 'https://apps.apple.com/us/app/rapid-relaxation-timer/id1622992653?platform=iphone',
        google: 'https://play.google.com/store/apps/details?id=net.michaelcalvinwood.ionicrelaxationtimer'
    },
    {
        icon: instantMemeIcon,
        title: 'InstantMeme',
        view: 'https://instantmeme.net',
        image: instantMemeImage,
        tech: 'react, node.js, express, javascript, HTML, CSS, SASS, dropzone, multer, REST API, axios',
        repos: ['https://github.com/michaelcalvinwood/instant-meme/tree/main/client', 'https://github.com/michaelcalvinwood/instant-meme/tree/main/server']
    },
    {
        icon: instockIcon,
        title: "InStock Inventory",
        view: "https://instockinventory.com",
        image: instockImage,
        tech: "Responsive webapp, git, Jira, scrum, Agile dev, REST API, react, node.js, express, javascript, axios",
        repos: ['https://github.com/michaelcalvinwood/instockinventory-client', 'https://github.com/michaelcalvinwood/instockinventory-server']
    },
    {
        icon: movieNightIcon,
        title: "Movie Night Out",
        view: "https://mywerld.com/movie-night-out",
        image: movieNightImage,
        tech: "Javscript DOM manipulation, Axios, HTML, CSS, Sass",
        repos: ['https://github.com/michaelcalvinwood/movie-night-out']
    },
    {
        icon: bandsiteIcon,
        title: "The Bees Knees",
        view: "https://mywerld.com/bandsite",
        image: bandsiteImage,
        tech: "Javascript DOM manipulation, fully responsive website, Axios, HTML, CSS, Sass, BEM",
        repos: ['https://github.com/michaelcalvinwood/michael-wood-bandsite']
    }

]

function Portfolio() {
  return (
    <div className='portfolio'>
        <h1 className='portfolio__title'>Portfolio</h1>
    
        <div className='portfolio__container'>
            {portfolio.map(project => {
              return <Project info={project} key={project.title}/>
            })}
            {/* <Project info={portfolio[0]} /> */}
        </div>
    </div>
  )
}

export default Portfolio