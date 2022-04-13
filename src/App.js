import './styles/main.css';
import Home from './pages/Home';
import ListCameraSystems from './pages/ListCameraSystems';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/listcamerasystems" element={<ListCameraSystems />} />
    </Routes>
  </BrowserRouter>
);

export default App;
