import { BrowserRouter, Route, Routes } from 'react-router';
import Homepage from './pages/Homepage';
import MenuPage from './pages/MenuPage';
import FeedPage from './pages/FeedPage';

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/*" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}
