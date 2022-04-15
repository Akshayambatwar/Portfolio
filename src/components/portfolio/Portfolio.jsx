import React from 'react'
import './portfolio.css'
import WEBSITE1 from '../../assests/website.PNG'
import WEBSITE2 from '../../assests/website2.PNG'
import WEBSITE3 from '../../assests/website3.PNG'


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={WEBSITE1}/>
          </div>
          <h3>Inspacco Official Website</h3>
          <a href='https://inspacco.com/' target="_blank" className='btn btn-primary'>Live Demo</a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={WEBSITE2}/>
          </div>
          <h3>Love at first write Website</h3>
          <a href='https://www.loveatfirstwrite.in/' target="_blank" className='btn btn-primary'>Live Demo</a>
        </article>
      </div>
      <div className="container portfolio__container" style={{marginTop:"30px"}}>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={WEBSITE3}/>
          </div>
          <h3>Authoropod Website</h3>
          <a href='https://authoropod-magazine.vercel.app/' target="_blank" className='btn btn-primary'>Live Demo</a>
        </article>
      
      </div>
    </section>
  )
}

export default Portfolio