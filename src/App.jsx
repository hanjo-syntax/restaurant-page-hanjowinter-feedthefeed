import { BrowserRouter, Route, Routes } from 'react-router';
import Homepage from './pages/Homepage';
import MenuPage from './pages/MenuPage';

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
    </BrowserRouter>
  );
}
