import './App.scss';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { retry } from './utils/CommonFunctions';
import ScrollToTop from './components/ScrollToTop';
import Loader from './components/Loader';
import Navigation from './components/Navigation'
import Footer from './components/Footer'
const Home = lazy(() => retry(() => import('./pages/Home')));

function App() {

  const pages = [
    {
      pageLink: '/',
      view: Home,
      displayName: 'Home'
    },
  ]

  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<Loader />}>
        <Navigation />
        <Routes>
          {pages.map((page, index) => {
            return (
              <Route
                exact
                path={page.pageLink}
                element={<page.view />}
                key={index}
              />
            );
          })}
        </Routes>
        <Footer />
      </Suspense>
    </Router>
  );
}

export default App;
