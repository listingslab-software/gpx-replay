import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { persistStore } from "redux-persist";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import { configureStore } from "./store/configureStore";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import theme from './style/theme';
import {
    CssBaseline,
} from '@material-ui/core/';
import {
    Auth,
    Home,
} from './views/';

const store = configureStore();
const persistor = persistStore(store);

class GPXReplay extends Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <MuiThemeProvider theme={createMuiTheme(theme)}>
                        <CssBaseline />
                        <Router>
                            <Switch>
                                <Route exact path="/" render={props => {
                                    return (<Home />);
                                }} />
                                <Route exact path="/auth" render={props => {
                                    return (<Auth />);
                                }} />
                            </Switch>
                        </Router>
                    </MuiThemeProvider>
                </PersistGate>
            </Provider>
        );
    }
}

export default GPXReplay;
