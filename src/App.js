import './App.css';
import Me from './Me/Me';
import ResponsiveAppBar from './Appbar/ResponsiveAppBar';
import BlogsPreview from './Blogs/BlogsPreview';
import ProjectList from './Projects/ProjectList';
import Blogs from './Blogs/Blogs';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  return (   
    <Router>
    <div className="App">
      <ResponsiveAppBar />
      <Switch>
        <Route exact path="/">
          <Me />
          <ProjectList />
          <BlogsPreview />
        </Route>
        <Route exact path='/Blogs'>
          <Blogs/>
        </Route>
      </Switch>
      </div>
      </Router>
  );
}

export default App;
