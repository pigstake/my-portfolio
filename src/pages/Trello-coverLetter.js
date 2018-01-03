import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <main>
        <article>
          <header>
            <h1>Hello Trello team!</h1>
          </header>
          <section className='work'>
            <img className="offsetImg" src="emoji-callme.png" alt='Call me emoji'/>
            <h2>Trello has been my #1 task management tool since 2009.</h2>
            <p>This is exciting, because I&rsquo;m a huge Trello fan — been using and evangelizing it for years.</p>
            <p>I&rsquo;d bring to Trello sevens years of digital product design experience — experience in UX research, creative collaboration, design education, creating design team processes, prototyping, graphic design and front end coding.</p>
            <p>Below I answered your questions and a bit more. I hope you like what I&rsquo;m throwing your way and I look forward to the next step of this process.</p>
            <p>Cheers,
            <br />Jamie Caloras</p>
            <hr />
          </section>
          <section className='work'>
            <img className="offsetImg" src="ico-visd.png" alt='iceberg, top highlighted'/>
            <h3>Good VisD &amp; Bad UX:<br />Duolingo</h3>
            <p>I’ll use <a href='http://bit.ly/1BCIGa9' target='_blank'>Jesse James Garrett’s model of user experience</a> to define terms so that we can communicate with a common language. I’ll also refer to some <a href='https://naldzgraphics.net/gestalt-principles-graphic-web-design/'>Gestalt principles</a> to critique visual design. I’m going to write about personal exeriences, instead of guessing at persona types, needs and conversion funnels, which I’d normally use to examine design success of my own projects.</p>
            <p>Duolingo is a lovely looking interface on all devices. Bright colors communicate calls to action and the cheery, playful mood of the brand. Big buttons and airy layouts make it a casual and clear experience. And the microinteractions with Duo, the owl mascot, are delightful if a little too frequent.</p>
            <figure>
              <img className='img-full' src='duolingo/gestalt-00.png' alt='Duolingo web app screenshot' />
              <figcaption>Bright, playful and airy!</figcaption>
            </figure>
            <h4>Positive VisD notes</h4>
            <p>The designers have used similarity to draw your eye to your achievements, especially those that need maintenance. All the gold UI elements represent achievements maintained through streak. You can see a nice use of continuity in the five bars on the left of each lesson that fill up with gold based on Duolingo’s measurement of your comprehension. And there’s the similarity between the Duo owl and the fluency shield, with the green leaves spreading up like Duo’s wings.</p>
            <figure>
              <img className='img-full' src='duolingo/gestalt-01.png' alt='Duolingo web app screenshot' />
              <figcaption>Nice use of figure/ground relationship here</figcaption>
            </figure>
            <p>There’s proximity and conscious use of the figure and ground relationship in the secondary lessons. Notice how Flirting and Idioms, bonus lessons that I had to buy, are both closer to one another than other lessons and on a reduced-contrast background. The Leaderboard content is also on lower contrast, which makes sense to me because it’s less important content, so drops away from the foreground.</p>
            <h4>The experience is rough</h4>
            <p>Duolingo has been my language tool of choice for a few years. I need motivation to learn a language and I need to be able to do it at my convenience. They acquired me with their good looks, accessibility, and zero cost. As a new user, their gamification mechanics motivated me, too. I was gaining levels while earning and spending Lingots, their virtual currency. I was coming back daily and I was even referring friends.</p>
            <p>Now that I’ve purchased everything in the store, though, there’s almost nothing to do with Lingots. The motivation to earn them is gone.</p>
            <figure>
              <img className='img-full' src='duolingo/store-00.png' alt='Duolingo web app screenshot' />
              <figcaption>I'll buy some more Lingots with my Lingots...</figcaption>
            </figure>
            <p>Sure, I could double or nothing to wager Lingots, but why would I want more of them? To freeze my streak? It’s not clear what a streak does beyond motivate me to come back tomorrow. Lingots are a UX fail on the User Need and Functional Spec levels.</p>
            <p>About a year ago, Duolingo ramped up advertising and rolled out a premium account.</p>
            <figure>
              <img className='img-full' src='duolingo/webAd-00.png' alt='Duolingo web ad screenshot' />
              <figcaption>This ad is small and you can click past it</figcaption>
            </figure>
            <p>On the web app, the ads are almost invisible. On mobile, though, you have to wait about a second before the close and continue button fade into view.  Now I avoid the mobile app in favor of my laptop. I consider this a User Need and Interaction Design failure. It’s hurting my retention on the app and I’m looking for alternatives now.
            </p>
            <img src='duolingo/mobileAd.gif' alt='Duolingo web app screenshot' />
          </section>
          <section className='work'>
            <img className="offsetImg" src="ico-ux.png" alt="iceberg, bottom highlighted"/>
            <h3>Good UX &amp; Bad VisD:<br />
            Steampowered.com Store</h3>
            <p>Specifically, I’m critiquing the steampowered.com store — not the community or other top-level sections of the site, and not the out-of-browser app through which you can play games.</p>
            <h4>Positive experience notes</h4>
            <p>I bought about a dozen games on Steam in the past year. My primary needs are seeing when games are on sale and then buying games. Steam suits those needs in a thorough, utilitarian way. My wishlist emails me when games are on sale and I can quickly flow from email to PayPal checkout. It’s not a graceful delight, but the specs were built; the flows are clear. Interactions are useful, like this search with predictive results:</p>
            <figure>
              <img className="img-full" src="steam/predictive-search.png" alt="Steam store search input"/>
              <figcaption>Predictive search is user-friendly search</figcaption>
            </figure>
            <h4>That VisD, though</h4>
            <p>One dropdown menu uses little down arrows to suggest the menu and one doesn’t:</p>
            <figure>
              <img className="img-full" src="steam/dropdown-00.png" alt="Top menu"/>
              <img className="img-full" src="steam/dropdown-01.png" alt="Second menu"/>
              <figcaption>I wonder how many people click the store menu link before realizing there's a hover dropdown menu</figcaption>
            </figure>
            <p>Why so inconsistent?</p>
            <p>Here’s another case of inconsistency and poor use of similarity. How many triangles can you find in this screenshot?</p>
            <figure>
              <img className="img-full" src="steam/triangles.png" alt="Too many triangle icons"/>
            <figcaption>Triangles are the sturdiest shape...</figcaption>
          </figure>
            <p>Too many! There are two different play icons and then different triangles used as arrows to scroll through videos. The lack of consistent play icons is an odd choice, so is using a triangle as an arrow here, so close to other triangles with different meaning and since they use chevrons as arrows elsewhere.</p>
            <p>Here’s a example of poor use of figure/ground relationship. Squint and look at this next screenshot:</p>
            <figure>
              <img className="img-full" src="steam/reviews.png" alt="User reviews of a game"/>
              <figcaption>Negative reviews are more important, right?</figcaption>
            </figure>
            <p>Is this game well-reviewed? The high contrast of those red down thumbs would suggest not! It is, though, very positively reviewed. Such poor use of contrast! Those positive reviews just fade into the background, allowing the red thumbs to dominate, even if they don’t tell the real story.</p>
          </section>
          <section className='work'>
            <img className="offsetImg" src="ico-icing.png" alt="cupcake with colored icing and cherry"/>
            <h3>Bonus Points</h3>
            <p>One last bit! I wanted to address the extras you’re looking for.</p>
            <h4>UI copy writing skills</h4>
            <p>I love to write and approach UI copy like another element of design. I’ll guide my team to a best guess, test it, and refine. I wrote all the copy for <a href='https://dotvoterapp.com' target='_blank'>Dotvoter</a>.</p>
            <h4>Data visualization skills</h4>
            <p>My last major project at Philosophie involved data visualization. I built and tested prototypes for a few personas over the course of several months. Clarity is king.</p>
            <h4>Design sprint or meeting facilitation skills</h4>
            <p>I’ve facilitated Design Sprints that follow the Google Venture method spot on. I’ve also riffed on the process. I love facilitating creative collaborations, retros and meetings in general. I’m a big fan of extablishing psychological safety on my teams and keepign the energy levels positive, as well as keeping things timely.</p>
            <h4>Familiarity with GitHub, React or CoffeeScript</h4>
            <p>I’ve <code>npm run start</code> a lot for this cover letter, because it’s written with CreateReactApp, a static site generator from Facebook using React. Most of my recent projects have been in React, too. I’ve been using GitHub on an almost-daily basis for years now. CoffeeScript I’m not super familiar with, except for the prototyping tool Framer.</p>
            <h4>Previous experience collaborating with a remote team</h4>
            <p>Not a whole lot, but many of my teams have been partially remote and I’ve been working remote since August as I travel. I’ve run remote design sprints, meetings of various kinds, and even creative sessions with tools like Freehand from Invision.</p>
          </section>
        </article>
      </main>
    );
  }
}

export default App;
