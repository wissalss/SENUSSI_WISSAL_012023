import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "./redux/Store"
import './index.css';
import Home from "./pages/Home/Home"
import Login from './pages/Login/Login';
import User from './pages/User/User';
import Page404 from './pages/Page404/Page404';
import Header from "./component/Header/Header"
import Footer from "./component/Footer/Footer"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <Router>
          <Header />

          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/profile' element={<User/>}/>
            <Route path = "*" element={ <Page404/> }/> 
          </Routes>

          <Footer />
        
        </Router>
      </Provider>
  </React.StrictMode>
);

