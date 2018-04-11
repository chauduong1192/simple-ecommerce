import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';

import configureStore from './state';

import Header from './components/Common/Header';
import Footer from './components/Common/Footer';
import Content from './components/Common/Content';

import routes from './routes';

import './App.css';

const store = configureStore(window.REDUX_INITIAL_DATA);

const App = props => (
    <ReduxProvider store={store}>
        <Router>
            <div className="app">
                <Header />
                
                <Content>
                    <Switch>
                        {routes.map(route => (
                            <Route {...route} />
                        ))}
                    </Switch>
                </Content>
                <Footer />
            </div>
        </Router>
    </ReduxProvider>
);

export default App;
