import { BrowserRouter, Route, Routes } from 'react-router';
import Page from './components/Page';

import Homepage from './pages/Homepage';
import MenuPage from './pages/MenuPage';
import FeedPage from './pages/FeedPage';
import Error404Page from './pages/Error404Page';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Page header footer Content={Homepage} />}
        />
        <Route
          path="/menu"
          element={<Page header footer Content={MenuPage} />}
        />
        <Route
          path="/feed"
          element={<Page header footer Content={FeedPage} />}
        />
        <Route
          path="/contact"
          element={<Page header footer Content={ContactPage} />}
        />
        <Route
          path="*"
          element={<Page header footer Content={Error404Page} />}
        />
      </Routes>
    </BrowserRouter>
  );
}