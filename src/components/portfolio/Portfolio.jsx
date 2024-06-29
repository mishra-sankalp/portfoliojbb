import React from 'react';
import './portfolio.css';
import img1 from '../../assets/portfolio.png';
import img2 from '../../assets/img2.png';
import img3 from '../../assets/img3.png';
import img4 from '../../assets/img4.png';
import img5 from '../../assets/img5.png';
const Portfolio = () => {
  return(
    <section id="portfolio">
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>
    <div className="container wrapper">
    {/* <article className='portfolio__item'> */}
      <div className="box">
          <div className="front_face">
          <div className="img">
            <img src={img1} alt="" className='image'/>
            <div className="title">
            <h3>Portfolio</h3>
            </div>
          </div>
          </div>
          <div className="back_face">
          {/* <div className="back"> */}
          <p className='name'>A fully responsive personal portfolio that features some of my projects as well as my resume and technical
                skills.</p>
          <span className="portfolio__cta">
          <a href="https://github.com/mishra-sankalp/my_portfolio" className="github btn" target='_blank' style={{border:0}}>GitHub</a>
          <a href="https://portfoliojbb.netlify.app/" className="btn btn-primary" target='_blank'>Live Demo</a>
          </span>
          {/* </div> */}
          </div>
      </div>
      {/* </article> */}

      {/* 2nd project */}
      {/* <article className='portfolio__item'> */}
      <div className="box">
        {/* <div className="post-card-inner"> */}
          <div className="front_face">
          <div className="img">
            <img src={img2} alt="" className='image'/>
            <div className="title">
            <h3>Drum-Kit</h3>
            </div>
          </div>
          </div>
          <div className="back_face">
          {/* <div className="back"> */}
          <p className='name'>A virtual drum set is created that can be played on a web browser.</p>
          <span className="portfolio__cta">
          <a href="https://github.com/mishra-sankalp/drum" className="github btn" style={{border:0}} target='_blank'>GitHub</a>
          <a href="https://mishra-sankalp.github.io/drum/" target='_blank' className="btn btn-primary">Live Demo</a>
          </span>
          {/* </div> */}
          </div>
      </div>
      {/* </article> */}

      {/* 3rd Project */}
      
      {/* <article className='portfolio__item'> */}
      <div className="box">
        {/* <div className="post-card-inner"> */}
          <div className="front_face">
          <div className='img'>
            <img src={img3} alt="" className="image" />
            <div className="title">
            <h3>Dice Game</h3>
            </div>
          </div>
          </div>
          <div className="back_face">
          {/* <div className="back"> */}
          <p className='name'>These games involve rolling dice and using the results to determine outcomes.</p>
          <span className="portfolio__cta">
          <a href="https://github.com/mishra-sankalp/dice_game" className="github btn" style={{border:0}} target='_blank'>GitHub</a>
          <a href="https://mishra-sankalp.github.io/dice_game/" target='_blank' className="btn btn-primary">Live Demo</a>
          </span>
          </div>
          {/* </div> */}
      </div>
      {/* </article> */}

      {/* 4th project */}
      {/* <article className='portfolio__item'> */}
      <div className="box">
        {/* <div className="post-card-inner"> */}
          <div className="front_face">
          <div className="img">
            <img src={img4} alt="" className='image'/>
            <div className="title">
            <h3>Simon Game</h3>
            </div>
          </div>
          </div>
          <div className="back_face">
          {/* <div className="back"> */}
          <p className='name'>It is simple yet challenging gameplay, combined with its iconic design and nostalgic appeal.</p>
          <span className="portfolio__cta">
          <a href="https://github.com/mishra-sankalp/simon_game" className="github btn" style={{border:0}} target='_blank'>GitHub</a>
          <a href="https://mishra-sankalp.github.io/simon_game/" target='_blank' className="btn btn-primary">Live Demo</a>
          </span>
          {/* </div> */}
          </div>
      </div>
      {/* </article> */}

      {/* 5th Project */}
      
      {/* <article className='portfolio__item'> */}
      <div className="box">
        {/* <div className="post-card-inner"> */}
          <div className="front_face">
          <div className='img'>
            <img src={img5} alt="" className="image" />
            <div className="title">
            <h3>Netflix</h3>
            </div>
          </div>
          </div>
          <div className="back_face">
          {/* <div className="back"> */}
          <p className='name'>A sample Netflix app to demonstrate the basic principles of props.</p>
          <span className="portfolio__cta">
          <a href="https://github.com/mishra-sankalp/netflix" className="github btn" style={{border:0}} target='_blank'>GitHub</a>
          <a href="https://64d2768b96e9bc02f421572b--superb-fox-f6aaaf.netlify.app/" className="btn btn-primary" target='_blank'>Live Demo</a>
          {/* </div> */}
          </span>
          </div>
      </div>
      {/* </article> */}

    </div>
  </section>
  );
}

export default Portfolio;