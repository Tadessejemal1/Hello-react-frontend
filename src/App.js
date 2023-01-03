import React from 'react'
import './App.css';
import Greeting from './components/Greeting';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';

function App() {
  return (
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <Routes>
              <Route path="/" element={<Greeting />} />
            </Routes>
          </Router>
        </Provider>
      </React.StrictMode>
  );
}

export default App;
