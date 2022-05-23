import React from 'react'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image"></div>
          <h3>This is a portfolio item title</h3>
          <a href="http://github.com" className='btn'>Github</a>
          <a href="http://github.com" className='btn'>Github</a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio