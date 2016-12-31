import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <main>
        <article>
          <header>
            <h1>You are a flipping genius!</h1>
          </header>
          <section>
            <h2>
              <img className="pig" src="pig.svg" alt="the pig"/>
              <br />And I&rsquo;m Jamie, a designer who codes and likes to think about strategy and collaboration.
            </h2>
            <p>
              Right now I work for the digital product consultancy <a href="http://www.philosophie.is">Philosophie</a>. Most of the time I do research and design for a <a href="http://google.pwc.com">PwC Google Alliance</a> product. When I&rsquo;m not on client work, I manage and lead design on one of our internal products, <a href="http://dotvoterapp.com">Dotvoter</a>. If you&rsquo;d like to know more, check out my quick, candid <a href="https://medium.com/@pigstake">Medium posts</a> about the work I do.
            </p>
            <h3>Reach out</h3>
            <p>
              I&rsquo;m looking for interesting problems to solve. Tweet me <a href="https://twitter.com/pigstake"> @pigstake</a>. If you prefer, add and message me on <a href="http://www.linkedin.com/in/jamisoncaloras
    ">LinkedIn</a>. We can trade some endorsements. Eh? Eh? <img src="emoji-tongue.svg" className="emoji" alt=":P"/><img src="emoji-halo.svg" className="emoji" alt="O:)"/>
            </p>
            <h3>Site credit to</h3>
            <ul>
              <li>
                <a href="http://github.com/facebookincubator/create-react-app">Create React App</a>, which I use as a static site generator to improve my Javascript skills and have informed opinions about styles in React so my engineer teammates grumble less
              </li>
              <li>
                <a href="https://github.com/pyrsmk/vertical-rhythmic">These mixins</a> and the writing that inspired them, on fluid typography and general web typesetting geekiness, all for your reading pleasure of course
              </li>
              <li>
                <a href="https://thenounproject.com/Ealancheliyan/">Ealancheliyan s</a> for his pig icon, which I love and use often, and <a href="https://thenounproject.com/josemdelaa/">José Manuel de Laá</a> for my egg bullets
              </li>
            </ul>
          </section>
        </article>
      </main>
    );
  }
}

export default App;
