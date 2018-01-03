import React, { Component } from 'react';
import './App.css';

class App extends Component {

  render() {
    return (
      <main>
        <article>
          <header>
            <h1>Hi hiring team,</h1>
          </header>
          <section className='work'>
            <img className="offsetImg" src="emoji-wave.png" alt='Wave emoji'/>
            <p>Below are descriptions and Google Photo albums of my process and output on four recent projects. My personal site (<a href='http://jamiecaloras.com'>jamiecaloras.com</a>) doesn&rsquo;t have a public portfolio.</p>
          </section>
          <section className='work'>
            <img className="offsetImg" src="thumb-pizza.png" alt="dripping pizza slice"/>
            <h2>Baker&rsquo;s Pizza<br/>Online Ordering</h2>
            <p>I work directly with a New York City pizza restaurant owner as product and design lead. He wants to grow online orders and move away from third-party solutions. I help him explore opportunities in a Lean way, launching experiments and discovering unknown opportunities for his customers. We’ve already identified a few solutions that should convert Grubhub and Seamless customers.</p>
            <figure>
              <a className='img-link' href='https://photos.app.goo.gl/E0qiUXvqx7Zej9zT2' target='_blank'>
                <img className='img-full' src='portfolio/bakers-goals.jpg' alt='Sticky notes and sketching' />
              </a>
              <a className='img-link' href='https://photos.app.goo.gl/E0qiUXvqx7Zej9zT2' target='_blank'>
                <img className='img-full' src='portfolio/bakers-sketch.jpg' alt='Designs in Sketch' />
              </a>
              <figcaption>Top: Baker’s Pizza founder and I in a design studio defining our target customers and figuring out our first experiment. Bottom: mockups In Sketch ready for an Invision prototype</figcaption>
            </figure>
            <h4>The impact I made</h4>
            <p>This is not a software startup; it’s a new pizza restaurant. <a href='https://techcrunch.com/2016/11/29/every-company-is-a-technology-company-but-most-dont-behave-like-one/'>All companies might be software companies</a> in the future. I’m helping the founder realize that now — teaching and working alongside him with design thinking, agile and lean best practices and some favorite tools. You can see the two of us in the middle of a design studio in the above photo.</p>
            <p><em>Launching soon!</em> For more photos of my process and output for Baker’s Pizza: <a href='https://photos.app.goo.gl/E0qiUXvqx7Zej9zT2' target='_blank'>Flip through project photos</a></p>
          </section>
          <section className='work'>
            <img className="offsetImg" src="thumb-dotvoter.png" alt="dog with attitude"/>
            <h2>Dotvoter</h2>
            <p>Dotvoter is the fastest way for remote teams to surface and prioritize ideas. It’s an internal product I started at Philosophie. I acted as product manager, lead designer, and contributed all of the styling code. After launch I led small teams in uncovering user needs, prioritizing problems to solve, and delivering product.</p>
            <figure>
              <a className='img-link' href='https://photos.app.goo.gl/n0ehciw4TowBNx6t2' target='_blank'>
                <img className='img-full' src='portfolio/dotvoter-prioritizing.jpg' alt='Prioritizing problems to solve' />
              </a>
              <a className='img-link' href='https://photos.app.goo.gl/n0ehciw4TowBNx6t2' target='_blank'>
                <img className='img-full' src='portfolio/dotvoter-whiteboard.jpg' alt='Sketching on a whiteboard' />
              </a>
              <figcaption>Top: I used an impact/effort estimate to prioritize several user problems. Bottom: sketched flows considering how a user might traverse states in the app</figcaption>
            </figure>
            <h4>The impact I made</h4>
            <p>Dotvoter transformed Philosophie culture. The CEO uses it during company-wide meetings. Product teams use it with clients during retros. In two years and without any marketing effort, 6300 people have cast over 16,000 votes on more than 15,000 ideas.</p>
            <h4>What I’ve learned</h4>
            <p><em>Try it out!</em> Check out the live app and <a href='https://dotvoterapp.com' target='_blank'>decide on something @dotvoterapp.com</a></p>
            <p><a href='https://photos.app.goo.gl/n0ehciw4TowBNx6t2' target='_blank'>See more portfolio photos</a></p>
          </section>
          <section className='work'>
            <img className="offsetImg" src="thumb-badger.png" alt="cartoon badger"/>
            <h2>PricewaterhouseCoopers<br/>Badger</h2>
            <p>Badger is a performance feedback product. How can personal data help employees? Their teams? Their managers? I was design lead on this product at Philosophie. My team was five strong — three engineers, myself and a product manager.</p>
            <p>To kick us off, I ran a design sprint. For six months, I facilitated creative studios, led agile-style meetings, ran user research efforts, built prototypes, iterated and shipped live product.</p>
            <figure>
              <a className='img-link' href='https://photos.app.goo.gl/ZhBl9yCMAExw48XK2' target='_blank'>
                <img className='img-full' src='portfolio/badger-research.jpg' alt='Sticky notes with research notes organized' />
              </a>
              <a className='img-link' href='https://photos.app.goo.gl/ZhBl9yCMAExw48XK2' target='_blank'>
                <img className='img-full' src='portfolio/badger-sketch.jpg' alt='Designs in Sketch' />
              </a>
              <figcaption>Top: organized notes from one cohort of user interviews. Bottom: screens for the latest iteration in Sketch ready for Invision and engineers</figcaption>
            </figure>
            <h4>The impact I made</h4>
            <p>Badger users outperform their peers by 17% in target performance metrics.</p>
            <p>Badger has launched to a mid-sized field service company and a major global cable company, but I can’t share the live app. For more images of my process and output: <a href='https://photos.app.goo.gl/ZhBl9yCMAExw48XK2' target='_blank'>Dig into the work</a></p>
          </section>
          <section className='work'>
            <img className="offsetImg" src="thumb-fso.png" alt="wrench"/>
            <h2>PricewaterhouseCoopers<br/>FSO</h2>
            <p>I was design lead on this project at Philosophie. My product team was six strong — one strategist, two designers, two engineers and a program manager.</p>
            <p>I led my team through research and cooperative design workshops with dispatchers and field techs. We discovered an opportunity for field service teams at the intersection of machine learning, chatbots and business process transformation. For nine months, I ran user research, built prototypes, and wrote frontend code for the production app.</p>
            <figure>
              <a className='img-link' href='https://photos.google.com/album/AF1QipOED9mNSxvAzfEfEpCkp2CmO34fzkfRw8AHTHh2' target='_blank'>
                <img className='img-full' src='portfolio/fso-taskflow.jpg' alt='Taskflow sketched' />
              </a>
              <a className='img-link' href='https://photos.google.com/album/AF1QipOED9mNSxvAzfEfEpCkp2CmO34fzkfRw8AHTHh2' target='_blank'>
                <img className='img-full' src='portfolio/fso-sketch.jpg' alt='Two mocks in Sketch' />
              </a>
              <figcaption>Could transparent, real-time communication and an AI chatbot blow the lid off the field service industry?</figcaption>
            </figure>
            <p>FSO has launched to three mid-sized field service companies, but I can’t share the live app. For more images of my process and output: <a href='https://photos.google.com/album/AF1QipOED9mNSxvAzfEfEpCkp2CmO34fzkfRw8AHTHh2' target='_blank'>See more behind the scenes and screens</a></p>
          </section>
          <section className='work'>
            <h2>Other work</h2>
            <h4>Venmetro</h4>
            <p>
              <a href='http://venmetro.com'>venmetro.com</a>
              <br />UX research, interaction design, branding, UI design, front-end code
            </p>
            <h4>David Kind</h4>
            <p>
              <a href='https://davidkind.com/'>davidkind.com</a>
              <br />UX research, interaction design, UI design, front-end code
            </p>
            <h4>Greenpeace</h4>
            <p>
              <a href='http://www.greenpeace.org/usa/blog/'>The Environmentalist Blog</a>
              <br />UI design, information architecture, content strategy, front-end code
            </p>
            <h4>Washington Interactive Network</h4>
            <p>
              <a href='http://insidereactor.com/'>The Reactor</a>
              <br />UI design, content strategy, information architecture, brand design, front-end code
            </p>
            <h4>Streamline Alliance</h4>
            <p>
              <a href='http://www.streamline-alliance.com/'>streamline-alliance.com</a>
              <br />UI design, content strategy, information architecture, brand design, front-end code
            </p>
          </section>
        </article>
      </main>
    );
  }
}

export default App;
