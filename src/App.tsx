import React from 'react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import AllPosts from './Components/AllPosts';
import OnePost from './Components/OnePost';
import logo from './static/images/logo.png';
import './static/styles/App.css';
import footer from './static/images/footer.png';
import Contact from './Components/Contact';


class App extends React.Component {

  render() {
    return (
        <BrowserRouter>
          <div className="App">
            <header className="App-header">
                <Link className='Logo-Container' to='/'><img src={logo} className="App-logo" alt="logo" /></Link>
              <nav>
                  <Link to='/'>Home</Link>
                  <Link to='/contact-us'>Contact Us</Link>

              </nav>
            </header>
            <main className="App-main">
                <h1>Money Lynx DOS (DISC OPERATING SYSTEM)</h1>
                <Switch>
                    <Route path='/contact-us' component={Contact} />
                    <Route component={AllPosts} path='/' exact />
                    <Route component={OnePost} path='/:slug' />
                </Switch>
            </main>
            <footer>
              <div className="App-hero">
                <div className="App-hero-image"></div>
              </div>
            </footer>
          </div>
     </BrowserRouter>
    );
  }
}

export default App;
