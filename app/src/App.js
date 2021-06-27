
import {BrowserRouter , Switch, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact  path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
