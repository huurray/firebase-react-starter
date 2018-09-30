import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

//pages
import Main from './components/Main';
import Sub from './components/Sub';
//hoc
import withAuth from './hoc/Auth';
import withStyles from './hoc/Styles';

class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Main} />
          <Route path="/sub" component={Sub} />
        </div>
      </BrowserRouter>
    );
  }
}

export default withStyles(withAuth(App));
