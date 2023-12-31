import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import UseMemoCase from './use-cases/UseMemoCase';
import UseRefCase from './use-cases/UseRefCase';
import UseCallbackCase from './use-cases/UseCallbackCase';
import ReactPortalCase from './use-cases/ReactPortalCase';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <div className='App'>
              <header className='App-header'>
                <img src={logo} className='App-logo' alt='logo' />
                <p>
                  Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                  className='App-link'
                  href='https://reactjs.org'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Learn React
                </a>
              </header>
            </div>
          }
        />
        <Route path='/use-memo' element={<UseMemoCase />} />
        <Route path='/use-ref' element={<UseRefCase />} />
        <Route path='/use-callback' element={<UseCallbackCase />} />
        <Route path='/react-portal-case' element={<ReactPortalCase />} />
      </Routes>
    </Router>
  );
}

export default App;
