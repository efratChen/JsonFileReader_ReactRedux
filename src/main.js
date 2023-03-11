import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Entry from './pages/entry';
import TableAndCalculations from './components/tableAndCalculations';
import store from './redux/store';
import '../styles/main.scss';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/table" render={() => <TableAndCalculations />} />
          <Route path="/" component={Entry} />
        </Switch>
      </Router>
    </Provider>
  );
};
ReactDOM.render(<App />, document.querySelector('main'));
