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
import SearchResult from 'containers/SearchResult';
import ViewDetails from 'containers/ViewDetails';
import Login from 'containers/Login/Loadable';
import Registration from 'containers/Registration/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../../styles/common.css';

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;
  width: 100%;
`;

export default function App() {
  const path = window.location.pathname; // lets imaging that url is "/home/x"
  const pathArray = path.split('/');
  const loc = pathArray[1].toLocaleLowerCase();
  const standAlonePages = ['/login', '/register'];
  // return (
  //   <AppWrapper>
  //     <Helmet
  //       titleTemplate="Span Shopping"
  //       defaultTitle="Span Shopping"
  //     >
  //       <meta name="description" content="Span Shopping" />
  //     </Helmet>
  //     {loc !== 'login' && loc !== 'register' && <Header />}
  //     <Switch>
  //       <Route exact path="/home" component={HomePage} />
  //       <Route exact path="/" component={Dashboard} />
  //       <Route path="/features" component={FeaturePage} />
  //       <Route path="/dashboard" component={DashboardNew} />
  //       <Route path="/ordersummary" component={OrderSummary} />
  //       <Route path="/login" component={Login} />
  //       <Route path="/register" component={Registration} />
  //       <Route exact path="/search" component={SearchResult} />
  //       <Route path="/productdetails" component={Productdetails} />
  //       <Route path="" component={NotFoundPage} />
  //     </Switch>
  //     {loc !== 'login' && loc !== 'register' && <Footer />}
  //     <GlobalStyle />
  //   </AppWrapper>
  // );

  const ContentSec = styled.div`
    margin-bottom: 0%;
    margin-top: 4%;
  `;

  return (
    <div style={{ background: '#FFF' }}>
      {standAlonePages.indexOf(window.location.pathname.toLowerCase()) !==
      -1 ? null : (
          <Header />
        )}
      {/* <Sidebar /> */}
      <ContentSec
        style={{
          marginTop:
            standAlonePages.indexOf(window.location.pathname.toLowerCase()) !==
            -1
              ? '0'
              : '4%',
        }}
      >
        <Switch>
          <Route exact path="/dashboard" component={DashboardNew} />
          <Route exact path="/ordersummary" component={OrderSummary} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Registration} />
          <Route exact path="/search" component={SearchResult} />
          <Route exact path="/viewdetails" component={ViewDetails} />

          <Route exact path="/" component={Dashboard} />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/features" component={FeaturePage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
      </ContentSec>
      {standAlonePages.indexOf(window.location.pathname.toLowerCase()) !==
      -1 ? null : (
          <Footer />
        )}
      <GlobalStyle />
    </div>
  );
}
