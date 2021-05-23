/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import Dashboard from 'containers/Dashboard/Loadable';
import DashboardNew from 'containers/DashboardNew/Loadable';
import OrderSummary from 'containers/OrderSummary/Loadable';
import Login from 'containers/Login/Loadable';
import Registration from 'containers/Registration/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';
import 'bootstrap/dist/css/bootstrap.min.css';

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

export default function App() {
  const path = window.location.pathname; // lets imaging that url is "/home/x"
  const pathArray = path.split('/');
  const loc = pathArray[1].toLocaleLowerCase();
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      {loc !== 'login' && loc !== 'register' && <Header />}
      <Switch>
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/" component={Dashboard} />
        <Route path="/features" component={FeaturePage} />
        <Route path="/dashboard" component={DashboardNew} />
        <Route path="/ordersummary" component={OrderSummary} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Registration} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      {loc !== 'login' && loc !== 'register' && <Footer />}
      <GlobalStyle />
    </AppWrapper>
  );
}
