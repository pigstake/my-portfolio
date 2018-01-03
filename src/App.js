import React, { Component } from 'react';
import './App.css';

class App extends Component {

  render() {
    return (
      <main>
        <article>
          <header>
            <h1>Portfolio of <br />
            Jamie Caloras</h1>
            <small className='subtitle'>Handcoded with &hearts;</small>
          </header>
          <section className='work'>
          </section>
          <section className='work'>
            <img className="offsetImg" src="thumb-pizza.png" alt="dripping pizza slice"/>
            <h2>Baker&rsquo;s Pizza<br/>Online Ordering</h2>
            <p>I work directly with a New York City pizza restaurant owner as product and design lead. He wants to grow online orders and move away from third-party solutions. I help him explore opportunities in a Lean way, launching experiments and discovering unknown opportunities for his customers. We’ve already identified a few solutions that should convert Grubhub and Seamless customers.</p>
            <figure>
              <a className='img-link' href='http://photos.app.goo.gl/E0qiUXvqx7Zej9zT2' target='_blank'>
                <img className='img-full' src='portfolio/bakers-sketch.jpg' alt='Designs in Sketch' />
              </a>
              <a className='img-link' href='http://photos.app.goo.gl/E0qiUXvqx7Zej9zT2' target='_blank'>
                <img className='img-full' src='portfolio/bakers-goals.jpg' alt='Sticky notes and sketching' />
              </a>
              <figcaption>Top: mockups In Sketch ready for an Invision prototype. Bottom: Baker’s Pizza founder and I in a design studio defining our target customers and figuring out our first experiment.</figcaption>
            </figure>
            <h4>The impact I made</h4>
            <p>This is not a software startup; it’s a new pizza restaurant. <a href='http://techcrunch.com/2016/11/29/every-company-is-a-technology-company-but-most-dont-behave-like-one/'>All companies might be software companies</a> in the future. I’m helping the founder realize that now — teaching and working alongside him with design thinking, agile best practices, and some favorite tools like Slack, Invision and Trello. You can see the two of us in the middle of a design studio in the above photo.</p>
            <p><em>Launching soon!</em> For more photos of my process and output for Baker’s Pizza: <a href='http://photos.app.goo.gl/E0qiUXvqx7Zej9zT2' target='_blank'>Flip through project photos</a></p>
          </section>
          <section className='work'>
            <img className="offsetImg" src="thumb-dotvoter.png" alt="dog with attitude"/>
            <h2>Dotvoter</h2>
            <p>Dotvoter is the fastest way for remote teams to surface and prioritize ideas. It’s an internal product I started at Philosophie. I acted as product manager, lead designer, and contributed all of the styling code. After launch I led small teams in uncovering user needs, prioritizing problems to solve, and delivering product.</p>
            <figure>
              <a className='img-link' href='http://dotvoterapp.com' target='_blank'>
                <img className='img-full' src='portfolio/dotvoter-devices.png' alt='Dotvoter displayed in multiple devices' />
              </a>
              <a className='img-link' href='http://photos.app.goo.gl/n0ehciw4TowBNx6t2' target='_blank'>
                <img className='img-full' src='portfolio/dotvoter-whiteboard.jpg' alt='Sketching on a whiteboard' />
              </a>
              <figcaption>Top: Dotvoter is responsive to support any device a participant might bring to a meeting and to display on conference screens. Bottom: sketched flows considering how a user might traverse states in the app</figcaption>
            </figure>
            <h4>Surprising research finding</h4>
            <p>Nine out of ten teams always use private voting and six out of ten teams always use private idea creation. Groupthink from public voting was not an initial pain point Dotvoter solved. This user need emerged after launch through user interviews.</p>
            <h4>The impact I made</h4>
            <p>Dotvoter transformed Philosophie culture. The CEO uses it during company-wide meetings. Product teams use it with clients during retros. In two years and without any marketing effort, 6300 people have cast over 16,000 votes on more than 15,000 ideas.</p>
            <p><em>Try it out!</em> Check out the live app and <a href='http://dotvoterapp.com' target='_blank'>decide on something @dotvoterapp.com</a></p>
            <p><a href='http://photos.app.goo.gl/n0ehciw4TowBNx6t2' target='_blank'>See more portfolio photos</a></p>
          </section>
          <section className='work'>
            <img className="offsetImg" src="thumb-badger.png" alt="cartoon badger"/>
            <h2>Badger</h2>
            <p>Badger is a performance feedback mobile app. How can personal data help employees? Their teams? Their managers? I was design lead on this product at Philosophie. My team was five strong — three engineers, myself and a product manager.</p>
            <p>To kick us off, I ran a design sprint. For six months, I facilitated creative studios, led agile-style meetings, ran user research efforts, built prototypes, iterated and shipped product.</p>
            <figure>
              <a className='img-link' href='http://photos.app.goo.gl/ZhBl9yCMAExw48XK2' target='_blank'>
                <img className='img-full' src='portfolio/badger-sketch.jpg' alt='Designs in Sketch' />
              </a>
              <a className='img-link' href='http://photos.app.goo.gl/ZhBl9yCMAExw48XK2' target='_blank'>
                <img className='img-full' src='portfolio/badger-research.jpg' alt='Sticky notes with research notes organized' />
              </a>
              <figcaption>Top: screens for the latest iteration in Sketch ready for Invision and engineers. Bottom: organized notes from one cohort of user interviews.</figcaption>
            </figure>
            <h4>The impact I made</h4>
            <p>Badger users outperform their peers by 17% in target performance metrics.</p>
            <p>For more images of my process and output: <a href='http://photos.app.goo.gl/ZhBl9yCMAExw48XK2' target='_blank'>Dig into the work</a></p>
          </section>
          <section className='work'>
            <img className="offsetImg" src="thumb-fso.png" alt="wrench"/>
            <h2>Field Service OS</h2>
            <p>I was design lead on this project at Philosophie. My product team was six strong — one strategist, two designers, two engineers and a program manager.</p>
            <p>I led my team through research and cooperative design workshops with dispatchers and field techs. We discovered an opportunity for field service teams at the intersection of machine learning, chatbots and business process transformation. For nine months, I ran user research, built prototypes, and wrote front-end code for the production app.</p>
            <figure>
              <a className='img-link' href='http://photos.google.com/album/AF1QipOED9mNSxvAzfEfEpCkp2CmO34fzkfRw8AHTHh2' target='_blank'>
                <img className='img-full' src='portfolio/fso-sketch.jpg' alt='Two mocks in Sketch' />
              </a>
              <a className='img-link' href='http://photos.google.com/album/AF1QipOED9mNSxvAzfEfEpCkp2CmO34fzkfRw8AHTHh2' target='_blank'>
                <img className='img-full' src='portfolio/fso-taskflow.jpg' alt='Taskflow sketched' />
              </a>
              <figcaption>Top: our real-time project management, customer support app with AI chatbot. Bottom: quick and dirty task flow to figure out dispatcher behavioral needs</figcaption>
            </figure>
            <p>For more images of my process and output: <a href='http://photos.google.com/album/AF1QipOED9mNSxvAzfEfEpCkp2CmO34fzkfRw8AHTHh2' target='_blank'>See more behind the scenes and screens</a></p>
          </section>
          <section className='work'>
            <h2>Other work</h2>
            <h4>Venmetro</h4>
            <p>
              <a href='http://venmetro.com'>venmetro.com</a> &rarr; $2,300,000 lent so far!
              <br /><em>UX research, interaction design, UI design, front-end code, brand design</em>
            </p>
            <h4>Pstat.us</h4>
            <p>
              <a href='http://pstat.us/'>pstat.us</a>
              <br /><em>UI design, front-end code, copywriting</em>
            </p>
            <h4>Greenpeace</h4>
            <p>
              <a href='http://www.greenpeace.org/usa/blog/'>The Environmentalist Blog</a>
              <br /><em>UI design, front-end code, information architecture, content strategy</em>
            </p>
            <h4>Washington Interactive Network</h4>
            <p>
              <a href='http://insidereactor.com/'>The Reactor</a>
              <br /><em>UI design, front-end code, information architecture, content strategy</em>
            </p>
            <h4>Streamline Alliance</h4>
            <p>
              <a href='http://www.streamline-alliance.com/'>streamline-alliance.com</a>
              <br /><em>UI design, front-end code, copywriting</em>
            </p>
          </section>
        </article>
      </main>
    );
  }
}

export default App;
