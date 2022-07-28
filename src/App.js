import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/about" component={ About } />
        <Route exact path="/skills" component={ Skills } />
        <Route exact path="/projects" component={ Projects } />
        <Route exact path="/contact" component={ Contact } />
        <Route exact path="*" component={ PageNotFound } />
      </Switch>
    </div>
  );
}

export default App;
