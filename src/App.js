import React, { Component } from 'react';
import './App.css';

class App extends Component {

  render() {
    return (
      <main>
        <header className='hero'>
          <h1>Hi, I’m <br />
          <a href='#aboutMe'>Jamie Caloras</a></h1>
          <p className='subtitle'>Welcome! Below you’ll find a selection of my work experience in <strong>UX, design, research, product strategy, and front-end code</strong>. &#x1F596;</p>
        </header>
        <article className='work'>
          <section className='work-copy'>
            <h2>VITAL Card</h2>
            <h4>A credit card that cares about your financial health and pays you to share</h4>
            <p>I currently lead design at VITAL, a credit card startup. More coming soon — behind the scenes, design decisions, and the impact I make week after week.</p>
          </section>
          <figure className='fullFigure'>
            <img className='img-full' src='portfolio/vital-screenshot--wide.png' alt='VITAL landing page'/>
          </figure>
          <section className='work-copy'>
            <h3>Key design decisions</h3>
            <p>coming soon</p>
          </section>
          <figure className='fullFigure'>
            <img className='img-full' src='portfolio/vital-screenshot--twoWidths.png' alt='VITAL landing page displayed in multiple devices'/>
          </figure>
          <section className='work-copy'>
            <h3>The impact I made</h3>
            <p>coming soon</p>
            <p><a href='http://photos.app.goo.gl/tB0XEWOTu3P9NpKT2'>See photos and screenshots of my process</a></p>
            <p><a href='http://vitalcard.com'>Visit the site</a></p>
          </section>
        </article>
        <article className='work'>
          <section className='work-copy'>
            <h2>Dotvoter</h2>
            <h4>Democratizing decisions for remote teams and saving sticky notes</h4>
            <p>Tired of crowding around a wall with your team to place dot votes? Ever need to include remote teammates? Product consulting teams at Philosophie had problems like this almost every day. I designed Dotvoter to solve those problems.</p>
          </section>
          <figure className='fullFigure'>
            <img className='img-full' src='portfolio/dotvoter-screenshot--wide.png' alt='Dotvoter home'/>
          </figure>
          <section className='work-copy'>
            <h3>Surprising research insight</h3>
            <p>Nine out of ten teams always use private voting and six out of ten teams always use private idea generation. Groupthink from public voting was not an initial pain point Dotvoter solved. Private idea generation is typical in physical, sticky-note dot voting. So is public voting; everyone crowds around the sticky notes and places dot stickers. This often proves physically awkward in conference rooms, shuffling around chairs and waiting for other people to move. It also allows voters to game votes and be influenced by groupthink, which is one reason why teams use Dotvoter.</p>
            <figure>
              <a className='img-link' href='http://photos.app.goo.gl/n0ehciw4TowBNx6t2'>
                <img className='img-full' src='portfolio/dotvoter-whiteboard.jpg' alt='Sketching on a whiteboard'/>
              </a>
              <figcaption>A major challenge was to understand and model the states of dot voting in the physical experience and translating that to a digital experience</figcaption>
            </figure>
          </section>
          <section className='work-copy'>
            <h3>Key design decisions</h3>
            <p>Dotvoter is often used in meetings and workshops. People bring various devices to these events and there’s often a big screen in the room. So, Dotvoter is accessible on phones, big screens, and everything between. Clickable elements are finger-friendly and fonts are readable from a big, distant screen.</p>
            <p>The color palette — the original sticky note yellow, bright pink and teal — is meant to evoke the bright, playful colors of many sticky notes. The typeface is Omnes Pro, which provides a friendly informality and, on the cards, suggests handwriting.</p>
          </section>
          <figure className='fullFigure'>
            <img className='img-full' src='portfolio/dotvoter-screenshot--twoWidths.png' alt='Dotvoter boards with votes'/>
          </figure>
          <section className='work-copy'>
            <h3>The impact I made</h3>
            <p>Dotvoter transformed Philosophie culture. The CEO uses it during company-wide meetings. Product teams use it with clients during retros. 6,900 people have cast over 22,300 votes on more than 21,000 ideas in two years without any paid marketing effort.</p>
            <p><em>Try it out!</em> Check out the live app and <a href='http://dotvoterapp.com'>decide on something @dotvoterapp.com</a></p>
            <p><a href='http://photos.app.goo.gl/n0ehciw4TowBNx6t2'>See more portfolio photos</a></p>
          </section>
        </article>
        <article className='work'>
          <section className='work-copy'>
            <h2>Badger</h2>
            <h4>Visualizing work data to help distributed sales teams work smarter and happier</h4>
            <p>Badger is a performance feedback mobile app. How can personal data help remote salespeople? Their teams? Their managers? And how could my team alleviate the mistrust in how managers could use data? I led design on this product at Philosophie. My team was five strong — three engineers, myself, and a product manager.</p>
          </section>
          <figure className='fullFigure'>
            <img className='img-full' src='portfolio/badger-screenshot.png' alt='Badger app'/>
          </figure>
          <section className='work-copy'>
            <h3>Key design decisions</h3>
            <p>The sales team already received weekly reports, so I tailored the Badger experience to fit into this existing behavior. Graphs, performance summaries, and a notification schedule were designed around weeks.</p>
            <p>Bright colors and slightly informal typography provide a memorable experience among the usual apps our users have at work. The app uses Libre Franklin, which is versatile enough to make big numbers and small fonts look good.</p>
            <figure>
              <a className='img-link' href='http://photos.app.goo.gl/ZhBl9yCMAExw48XK2'>
                <img className='img-full' src='portfolio/badger-research.jpg' alt='Sticky notes with research notes organized'/>
              </a>
              <figcaption>I moderated user interviews while my product manager and two engineers noted observations. We organized our notes together to share insights.</figcaption>
            </figure>
            <h3>The impact I made</h3>
            <p>My team learned early on through user interviews that people had trust issues exposing their performance data. Week after week, changes in copy and color helped alleviate this. Over six months, Badger users at a cable company outperformed their peers by 17%.</p>
            <p>For more images of my process and output: <a href='http://photos.app.goo.gl/ZhBl9yCMAExw48XK2'>Dig into the work</a></p>
          </section>
        </article>
        <article className='work'>
          <section className='work-copy'>
            <h2>Field Service OS</h2>
            <h4>A friendly robot and new way of working to connect a field service team</h4>
            <p>How might a band of techies help a 70-year old service company better serve their customers? My team was six strong — one strategist, two designers, two engineers, and a program manager. I led the team through <a href='http://uxdesign.cc/organizing-ux-research-with-google-forms-and-sheets-b375411c664c'>field research</a>, cooperative design workshops, and prototype tests with dispatchers, warehouse managers, and field technicians to discover how we could help.</p>
          </section>
          <figure className='fullFigure'>
            <img className='img-full' src='portfolio/fso-screenshot.png' alt='FSO app'/>
          </figure>
          <section className='work-copy'>
            <h3>Key design decisions</h3>
            <p>Dispatchers on this team have a lot of responsibilities — customer support, field tech support, schedulers, communication go-betweens, and sort of human records of project information for various teammates. These dispatchers helped us identify which of those responsibilities they’d be happy to let software handle, like scheduling and preliminary job assessments.</p>
            <p>We chose to promote transparent and open communication across teams working on a given support ticket. Dispatchers, assigned field technicians, sales reps, warehouse managers, and customers could chat, see progress and associated data.</p>
            <p>My client had partnered with Google on this project, which brought the constraint of Material Design. Since most of the field technicians used Android phones, Material let us ship prototypes with familiar UI faster than if we had created a new design system.</p>
            <figure>
              <a className='img-link' href='http://photos.google.com/album/AF1QipOED9mNSxvAzfEfEpCkp2CmO34fzkfRw8AHTHh2'>
                <img className='img-full' src='portfolio/fso-sketches.png' alt='Taskflow sketched'/>
              </a>
              <figcaption>I moderated design studios, design sprints, and research synthesis with my team. Collaborative sketching helped to communicate and plan fast together.</figcaption>
            </figure>
            <p>For more images of my process and output: <a href='http://photos.google.com/album/AF1QipOED9mNSxvAzfEfEpCkp2CmO34fzkfRw8AHTHh2'>See more behind the scenes and screens</a></p>
          </section>
        </article>
        <article className='work'>
          <section className='work-copy'>
            <h2>Baker’s Pizza</h2>
            <h4>Better pizza delivery in the Big Apple</h4>
            <p>I worked with a New York City pizza restaurant owner as product and design lead. He wanted to grow online orders and move away from third-party solutions. I taught him how to build digital products and services in a Lean way, launching experiments to test ideas and discover opportunities for his customers.</p>
          </section>
          <figure className='fullFigure'>
            <img className='img-full' src='portfolio/bakers-screenshot--home.png' alt='Baker's Pizza/>
          </figure>
          <section className='work-copy'>
            <h3>Key design decisions</h3>
            <p>Baker’s pizza is playful, irreverent, and thoroughly New York. My wife and I designed the restaurant’s brand identity to match. This brand was a great place to start for UI design. I was able to use menu design choices, like the pink border, to make online ordering feel more like physical ordering. Copy and icons help provide the Baker’s experience, too. We added a “Yell at us” button so that customers could let us know if they are out of free delivery range — letting them know we care and supplying the business with data.</p>
            <figure>
              <a className='img-link' href='http://photos.app.goo.gl/E0qiUXvqx7Zej9zT2'>
                <img className='img-full' src='portfolio/bakers-goals.jpg' alt='Sticky notes and sketching'/>
              </a>
              <figcaption>Baker’s Pizza founder and I surfacing customer types and experiment ideas, and picking which to focus on first</figcaption>
            </figure>
            <h3>The impact I made</h3>
            <p>This is not a software startup; it’s a pizza restaurant. <a href='http://techcrunch.com/2016/11/29/every-company-is-a-technology-company-but-most-dont-behave-like-one/'>All companies might be software companies</a> in the future. I helped the founder see value in digital extensions of his service, and the work it takes to build the right things — teaching and working alongside him with design collaboration, agile implementation planning, and some favorite tools like Slack, Invision and Trello. You can see the two of us in the middle of a design studio in the above photo.</p>
            <p>For more photos of my process and output for Baker’s Pizza: <a href='http://photos.app.goo.gl/E0qiUXvqx7Zej9zT2'>Flip through project photos</a></p>
          </section>
        </article>
        <article className='work'>
          <section className='work-copy'>
            <h2>Other work</h2>
            <h3 className='m-topOnly'>Venmetro</h3>
            <p>
              <a href='http://venmetro.com'>venmetro.com</a> &rarr; $2,300,000 lent so far!
              <br /><em>UX research, interaction design, UI design, front-end code, brand design</em>
            </p>
            <h3 className='m-topOnly'>Pstat.us</h3>
            <p>
              <a href='http://pstat.us/'>pstat.us</a>
              <br /><em>UI design, front-end code, copywriting</em>
            </p>
            <h3 className='m-topOnly'>Greenpeace</h3>
            <p>
              The Environmentalist Blog
              <br /><em>UI design, front-end code, information architecture</em>
            </p>
            <h3 className='m-topOnly'>Washington Interactive Network</h3>
            <p>
              <a href='http://insidereactor.com/'>The Reactor</a>
              <br /><em>UI design, front-end code, information architecture</em>
            </p>
            <h3 className='m-topOnly'>Streamline Alliance</h3>
            <p>
              <a href='http://www.streamline-alliance.com/'>streamline-alliance.com</a>
              <br /><em>UI design & front-end code</em>
            </p>
          </section>
        </article>
        <article className='work' id='aboutMe'>
          <section className='work-copy'>
            <h2>About me</h2>
            <h4>Designer, board-game enthusiast, &amp; amateur bread baker in Brooklyn</h4>
            <p>Hello! 👋 I’m a problem finder, definer, prioritizer, and solver — a Designer. I moderate warm and hospitable research sessions, facilitate lively creative collaborations, help my teams understand users, build design systems, test prototypes, and ship product. My specialty is user-centered design of digital things, with more focus on product than marketing.</p>
            <p>Over the past eight years, I’ve been fortunate to work with wonderful in-house, agency, and consulting teams, solving problems for clients all over the world. I have particularly enjoyed the times working closely with small, diverse teams full of trust and collaborative rhythm. If you’re reading this — thank you.</p>
            <p>Want to chat about Design? Next steps of your idea? Second-hand or vintage menswear? Send me a message on <a href='http://www.linkedin.com/in/jamisoncaloras/'>LinkedIn</a> or <a href='http://twitter.com/pigstake'>Twitter</a>. Ask me for a photo of my bread if you want to make an impression. 😉🍞</p>
            <p>Read some of my <a href='http://medium.com/@pigstake'>work-related blog raving on Medium</a>.</p>
          </section>
          <hr />
          <section className='work-copy'>
            <p>Oh wow! You made it down here. Well, there’s not much more I can say. This site is handmade with &#x2764;, by yours truly, and:</p>
            <ul>
              <li>
                <a href="http://github.com/facebookincubator/create-react-app">Create React App</a>, which I use as a static site generator to improve my Javascript skills and have informed opinions about styles in React so my engineer teammates grumble less
              </li>
              <li>
                <a href="http://github.com/pyrsmk/vertical-rhythmic">These mixins</a> and the writing that inspired them, on fluid typography and general web typesetting geekiness, all for your reading pleasure of course
              </li>
            </ul>
            <figure>
              <img src='pigSmile.svg' alt='Smiling pig'/>
            </figure>
          </section>
        </article>
      </main>
    );
  }
}

export default App;
