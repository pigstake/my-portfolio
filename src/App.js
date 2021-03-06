import React, { Component } from 'react';
import './App.css';

class App extends Component {

  render() {
    return (
      <main>
        <header className='hero'>
          <p className='subtitle'>Hi, I’m <a href='#aboutMe'>Jamie.</a> I’ve been designing (mostly for screens) since 2010 — leading startups through research and strategy, finding joy in process, craft, and code, and mentoring newbies. Below you’ll find <a href='#snippets'>snippets</a> and  <a href='#stories'>longer stories</a> of my work. Find more on <a href='https://twitter.com/pigstake'>Twitter</a>, <a href="https://medium.com/@pigstake">Medium</a>, and <a href="https://www.linkedin.com/in/jamisoncaloras/">LinkedIn</a>.</p>
        </header>
        <nav className='siteNav'>
          <ul className='siteNav-list'>
            <li className='siteNav-listItem'>
              <a className='siteNav-link' href='#stories'>Long(ish) Work Stories</a>
              <img className='siteNav-tail' src='pig-tail.svg' alt='A corkscrew pig tail'/>
            </li>
            <li className='siteNav-listItem'>
              <a className='siteNav-link' href='#snippets'>Work Snippets</a>
              <img className='siteNav-tail' src='pig-tail.svg' alt='A corkscrew pig tail'/>
            </li>
          </ul>
        </nav>
        <article className='work' id='stories'>
          <h4>
            <img className='tail' src='pig-tail.svg' alt='A corkscrew pig tail'/>
            Long(ish) Reads
          </h4>
          <section className='work-copy'>
            <header className='work-header'>
              <h2>Dotvoter</h2>
              <h5>Converge, diverge, and save sticky notes <br/> <a href='http://bit.ly/dotvoter'>Visit live app</a> // <a href='http://bit.ly/dotvoter-google-photos'>Browse design artifacts</a></h5>
            </header>
            <p>Tired of crowding around a wall with your team to place dot votes? Ever need to include remote teammates? Product consulting teams at Philosophie had problems like this almost every day. I paired with an engineer build Dotovter and solve those problems.</p>
            <p><em>My contribution: </em>Strategy, Design, Research, Front-end Code</p>
          </section>
          <figure className='fullFigure'>
            <img className='img-full' src='portfolio/dotvoter-screenshot--wide.png' alt='Dotvoter home'/>
          </figure>
          <section className='work-copy'>
            <h3>No more groupthink!</h3>
            <p>Nine out of ten teams always use private voting and six out of ten teams always use private idea generation. Groupthink from public voting was not an initial pain point Dotvoter solved. Private idea generation is typical in physical, sticky-note dot voting. So is public voting; everyone crowds around the sticky notes and places dot stickers. This often proves physically awkward in conference rooms, shuffling around chairs and waiting for other people to move. It also allows voters to game votes and be influenced by groupthink, which is one reason why teams use Dotvoter.</p>
            <figure>
              <a className='img-link' href='http://bit.ly/dotvoter-google-photos'>
                <img className='img-full' src='portfolio/dotvoter-whiteboard.jpg' alt='Sketching on a whiteboard'/>
              </a>
              <figcaption>We needed to understand and model the states of dot voting in the physical experience and translate that to a digital experience. This is one of many divergent sketches.</figcaption>
            </figure>
          </section>
          <section className='work-copy'>
            <h3>Key design decisions</h3>
            <p>Dotvoter is often used in meetings and workshops. People bring various devices to these events and there’s often a big screen in the room. So, Dotvoter is accessible on phones, big screens, and everything between. Clickable elements are finger-friendly and fonts are readable from a big, distant screen.</p>
            <p>The color palette — the original sticky note yellow, bright pink and teal — is meant to evoke the bright, playful colors of many sticky notes. The typeface is Omnes Pro, which provides a friendly informality and, on the cards, suggests handwriting without sacrificing legibility.</p>
          </section>
          <figure className='fullFigure'>
            <img className='img-full' src='portfolio/dotvoter-screenshot--twoWidths.png' alt='Dotvoter boards with votes'/>
          </figure>
          <section className='work-copy'>
            <h3>The impact</h3>
            <p>Dotvoter transformed Philosophie culture. The CEO uses it during company-wide meetings. Product teams use it with clients during retros. 6,900 people have cast over 22,300 votes on more than 21,000 ideas in two years without any paid marketing effort.</p>
            <p><a href='http://bit.ly/dotvoter'>Go create a board @dotvoterapp</a> and decide on something.</p>
          </section>
        </article>
        <article className='work'>
          <section className='work-copy'>
            <header className='work-header'>
              <h2>Badger</h2>
              <h5>Visualizing work data to help distributed sales teams work smarter and happier <br/> <a href='http://bit.ly/pwc-badger-google-photos'>Browse design artifacts</a></h5>
            </header>
            <p>Badger is a performance feedback mobile app. How can personal data help remote salespeople? Their teams? Their managers? And how could my team alleviate the mistrust in how managers could use data? I led design on this product at Philosophie. We were a team of five — three engineers, myself, and a product manager.</p>
            <p><em>My contribution: </em>Design, Research, Front-end Code</p>
          </section>
          <figure className='fullFigure'>
            <img className='img-full' src='portfolio/badger-screenshot.png' alt='Badger app'/>
          </figure>
          <section className='work-copy'>
            <h3>Key design decisions</h3>
            <p>The sales team already received weekly reports, so I tailored the Badger experience to fit into this existing behavior. Graphs, performance summaries, and a notification schedule were designed around familar work rhythms.</p>
            <p>Bright colors and slightly informal typography provide a memorable experience among the usual apps our users have at work. The app uses Libre Franklin, which is versatile enough to make big numbers and small fonts look good.</p>
            <figure>
              <a className='img-link' href='http://bit.ly/pwc-badger-google-photos'>
                <img className='img-full' src='portfolio/badger-research.jpg' alt='Sticky notes with research notes organized'/>
              </a>
              <figcaption>I moderated user interviews while my product manager and two engineers noted observations. We organized our notes together to share insights.</figcaption>
            </figure>
            <h3>The impact</h3>
            <p>My team learned early on through user interviews that people had trust issues exposing their performance data. Week after week, changes in copy and color helped alleviate this. Over six months, Badger users at a cable company outperformed their peers by 17%.</p>
          </section>
        </article>
        <article className='work'>
          <section className='work-copy'>
            <header className='work-header'>
              <h2>Field Service OS</h2>
              <h5>A friendly chatbot and new way of working to connect a field service team <br/> <a href='http://bit.ly/pwc-fso-google-photos'>Browse design artifacts</a></h5>
            </header>
            <p>How might a 70-year old field service company better serve their customers? We were a team of six — one strategist, two designers, two engineers, and a program manager. I led the team through <a href='http://bit.ly/organizing-ux-research'>field research</a>, cooperative design workshops, and prototype tests with dispatchers, warehouse managers, and field technicians to discover how we could help.</p>
          </section>
          <p><em>My contribution: </em>Design, Research, Strategy, Creative Workshops</p>
          <figure className='fullFigure'>
            <img className='img-full' src='portfolio/fso-screenshot.png' alt='FSO app'/>
          </figure>
          <section className='work-copy'>
            <h3>Key design decisions</h3>
            <p>Dispatchers on this team have a lot of responsibilities — customer support, field tech support, schedulers, communication go-betweens, and sort of human records of project information for various teammates. These dispatchers helped us identify which of those responsibilities they’d be happy to let software handle, like scheduling and preliminary job assessments.</p>
            <p>We chose to promote transparent and open communication across teams working on a given support ticket. Dispatchers, assigned field technicians, sales reps, warehouse managers, and customers could chat, see progress and associated data.</p>
            <p>My client had partnered with Google on this project, which brought the constraint of Material Design. Since most of the field technicians used Android phones, Material let us ship prototypes with familiar UI faster than if we had created a new design system.</p>
            <figure>
              <a className='img-link' href='http://bit.ly/pwc-fso-google-photos'>
                <img className='img-full' src='portfolio/fso-sketches.png' alt='Taskflow sketched'/>
              </a>
              <figcaption>I moderated design studios, design sprints, and research synthesis with my team. Collaborative sketching helped us communicate and plan fast.</figcaption>
            </figure>
          </section>
        </article>
        <article className='work'>
          <section className='work-copy'>
            <header className='work-header'>
              <h2>Baker’s Pizza</h2>
              <h5>Better pizza delivery in the Big Apple <br/> <a href='http://bit.ly/bakers-pizza-google-photos'>Browse design artifacts</a></h5>
            </header>
            <p>I worked with a New York City pizza restaurant owner as product and design lead. He wanted to grow online orders and move away from third-party solutions. I taught him how to build digital products and services in a Lean way, launching experiments to test ideas and discover opportunities for his customers.</p>
            <p><em>My contribution: </em>Design, Research, Strategy</p>
          </section>
          <figure className='fullFigure'>
            <img className='img-full' src='portfolio/bakers-screenshot--home.png' alt='Baker’s Pizza'/>
          </figure>
          <section className='work-copy'>
            <h3>Key design decisions</h3>
            <p>Baker’s pizza is playful, irreverent, and thoroughly New York. My wife and I designed the restaurant’s brand identity to match. This brand was a great place to start for UI design. I was able to use menu design choices, like the pink border, to make online ordering feel more like physical ordering. Copy and icons help provide the Baker’s experience, too. We added a “Yell at us” button so that customers could let us know if they are out of free delivery range — letting them know we care and supplying the business with data.</p>
            <figure>
              <a className='img-link' href='http://bit.ly/bakers-pizza-google-photos'>
                <img className='img-full' src='portfolio/bakers-goals.jpg' alt='Sticky notes and sketching'/>
              </a>
              <figcaption>Baker’s Pizza founder and I surfacing customer types and experiment ideas, and picking which to focus on first</figcaption>
            </figure>
            <h3>The impact</h3>
            <p>This is not a software startup; it’s a pizza restaurant. <a href='https://tcrn.ch/2xVBev7'>All companies might be software companies</a> in the future. I helped the founder see value in digital extensions of his service, and the work it takes to build the right things — teaching and working alongside him with design collaboration, agile implementation planning, and some favorite tools like Slack, Invision and Trello. You can see the two of us in the middle of a design studio in the above photo.</p>
          </section>
        </article>
        <article className='work' id='snippets'>
          <section className='work-copy'>
            <h4>
              <img className='tail' src='pig-tail.svg' alt='A corkscrew pig tail'/>
              Recent Work Snippets
            </h4>
            <div className='work-snippet'>
              <h3>Teachers Pay Teachers</h3>
              <h5>Helping remote teachers and students in crisis<br /> <a href='https://www.teacherspayteachers.com/TpTSchoolAccess/Teachers'>Visit School Access</a></h5>
              <p>What I’m most proud of, recently, is this small solution here called Student Link. With this link, tens of thousands of teachers on our new platform were able to provide resources to students who had just started distance learning because of COVID. Before this link, teachers had no way of using the catalog of digital resources on Teachers Pay Teachers with their at-home students.</p>
              <p><em>More coming soon about my process and other work at TpT!</em></p>
              <img className='img-full' src='portfolio/tptsa-studentLink.png' alt='Screenshot of a link teachers can share with their students'/>
            </div>
            <div className='work-snippet'>
              <h3>Shogun</h3>
              <h5>High-impact features for the most popular Shopify page builder <br/> <a href='http://www.getshogun.com'>Visit Shogun</a></h5>
              <p>When your team quadruples in size in a year, <a href='https://norrisnode.com/3-inflection-points/'>expect growing pains</a>. I helped engineers better grok designs with standardized UI patterns. We put the patterns to work building Shogun’s long overdue responsive editing tools and custom form builder.</p>
              <img className='img-full' src='portfolio/shogun-responsive.gif' alt='Animated gif of Shogun responsive editor'/>
            </div>
            <div className='work-snippet'>
              <h3>Kindur</h3>
              <h5>Retirement finance advice  and a living style guide <br/> <a href='http://www.kindur.com'>Visit Kindur</a></h5>
              <p>My role at Kindur was working with engineers to unpack the practical realities of the founder’s vision as we built and evaluated the product. Day-to-day included lots of white board sketching with teammates, exploring data visualization options, shaping a loose brand guide into a UI system, and coding in React.</p>
              <img className='img-full' src='portfolio/kindur.png' alt='Kindur screenshots'/>
            </div>
          </section>
        </article>
        <article className='work' id='aboutMe'>
          <section className='work-copy'>
            <header className='work-header'>
              <h4>
                <img className='tail' src='pig-tail.svg' alt='A corkscrew pig tail'/>
                About me
              </h4>
              <h5>Designer, board game enthusiast, vintage bicycle romantic, and amateur bread baker in Brooklyn</h5>
            </header>
            <p>Hello! <span role="img" aria-label="wave emoji">👋🏻</span> I’m a problem finder, definer, prioritizer, and solver — a Designer. I moderate warm and hospitable research sessions, facilitate lively creative collaborations, help my teams understand users, build design systems, test prototypes, and ship product. My specialty is user-centered design of digital things.</p>
            <p>Since 2010, I’ve been fortunate to work with wonderful in-house, agency, and consulting teams, solving problems for clients all over the world, contributing to and leading the design work, teaching (and often learning!) as I go. I have particularly enjoyed the times working closely with small, diverse teams full of trust and collaborative rhythm. If you’re reading this — thank you.</p>
            <p>Want to chat about Design? Next steps of your idea? Second-hand or vintage menswear? Send me a message on <a href='https://www.linkedin.com/in/jamisoncaloras/'>LinkedIn</a> or <a href='https://twitter.com/pigstake'>Twitter</a>. Ask me for a photo of my bread if you want to make an impression. <span role="img" aria-label="wink, bread, and spock emojis">😉🍞🖖🏻</span></p>
            <h3>My reading list</h3>
            <ul className='eggList'>
              <li><cite className='strike'>CivilWarLand in Bad Decline</cite><h5 className='m-bottomOnly'>by George Saunders</h5></li>
              <li><cite className='strike'>Nimona</cite><h5 className='m-bottomOnly'>by Noelle Stevenson</h5></li>
              <li><cite className='strike'>The One Hundred Nights of Hero</cite><h5 className='m-bottomOnly'>by Isabel Greenberg</h5></li>
              <li><cite className='strike'>The Quantum Thief</cite><h5 className='m-bottomOnly'>by Hannu Rajaniemi</h5></li>
              <li><cite className='strike'>The Parable of the Sower</cite><h5 className='m-bottomOnly'>by Octavia Butler</h5></li>
              <li><cite className='strike'>The Windup Girl</cite><h5 className='m-bottomOnly'>by Paolo Bacigalupi</h5></li>
              <li><cite className='strike'>Ruined by Design</cite><h5 className='m-bottomOnly'>by Mike Monteiro</h5></li>
              <li><cite className='strike'>Blood, Bones & Butter</cite><h5 className='m-bottomOnly'>by Gabrielle Hamilton</h5></li>
              <li><cite>Shape Up</cite><h5 className='m-bottomOnly'>by Ryan Singer</h5></li>
              <li><cite className='strike'>Saga: Book Three</cite><h5 className='m-bottomOnly'>by Brian K. Vaughan</h5></li>
              <li><cite>Everfair</cite><h5 className='m-bottomOnly'>by Nisi Shawl</h5></li>
              <li><cite>The Wind’s Twelve Quarters</cite><h5 className='m-bottomOnly'>by Ursula K. Le Guin</h5></li>
            </ul>
          </section>
        </article>
        <footer>
          <section className='work-copy'>
            <figure>
              <img className='pig' src='pigSmile.svg' alt='Smiling pig'/>
            </figure>
            <p>Oh wow! You made it down here. Well, there’s not much more I can say. This site is handmade with &#x2764;, by yours truly, and:</p>
            <ul className='eggList'>
              <li>
                <a href="https://github.com/facebookincubator/create-react-app">Create React App</a>, which I use as a static site generator to improve my Javascript skills and have informed opinions about styles in React so my engineer teammates grumble less
              </li>
              <li>
                <a href="https://github.com/pyrsmk/vertical-rhythmic">These mixins</a> and the writing that inspired them, on fluid typography and general web typesetting geekiness, all for your reading pleasure of course
              </li>
            </ul>
            <a className='styleReset' href='https://www.freelancersunion.org?utm_source=badge&utm_campaign=member&utm_content=member-stamp-200'>
              <img src='member-badge.svg' alt='Proud member of Freelancers Union' height='200' width='200' className='unionStamp' />
            </a>
          </section>
        </footer>
      </main>
    );
  }
}

export default App;
