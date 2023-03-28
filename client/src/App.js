
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import ErrorPage from './components/ErrorPage';
import { GlobalStyle } from './GlobalStyle/Globalstyle';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <>
      <GlobalStyle/>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="login" element={<Login/>} />
          <Route path="signup" element={<Signup/>} />
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
