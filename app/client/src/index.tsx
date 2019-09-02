import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import Editor from "./pages/Editor";
import PageNotFound from "./pages/common/PageNotFound";
import LoginPage from "./pages/common/LoginPage";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import appReducer from "./reducers";
import WidgetBuilderRegistry from "./utils/WidgetRegistry";
import { ThemeProvider, theme } from "./constants/DefaultTheme";
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from "./sagas"
import { appInitializer } from "./utils/AppsmithUtils";
import ProtectedRoute from "./pages/common/ProtectedRoute";

appInitializer()
WidgetBuilderRegistry.registerWidgetBuilders();
const sagaMiddleware = createSagaMiddleware()
const store = createStore(appReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga)
ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <ProtectedRoute path="/builder" component={Editor} />
          <Route exact path="/login" component={LoginPage} />
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
