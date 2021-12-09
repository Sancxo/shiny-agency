import reportWebVitals from './reportWebVitals';
import React, {Suspense, lazy} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './index.css';

// Components
import Header from './components/Header';
const Error = lazy(() => import('./components/Error'));

//Pages
const Home = lazy(() => import('./pages/Home'));
const Survey = lazy(() => import('./pages/Survey'));
const Results = lazy(() => import('./pages/Results'));
const Freelances = lazy(() => import('./pages/Freelances'));

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Suspense fallback={<div>Chargement en cours</div>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/survey/:questionNumber' element={<Survey />} />
          <Route path='/results' element={<Results />} />
          <Route path='/freelances' element={<Freelances />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Suspense>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
