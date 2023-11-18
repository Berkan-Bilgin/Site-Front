import Home from './pages/Home';
import EventDetailsPage from './pages/EventDetailsPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import PreviousEventsPage from './pages/PreviousEventsPage';
import PlacePage from './pages/PlacePage';
import CategoryPage from './pages/CategoryPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event-details/:eventName" element={<EventDetailsPage />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/previous-events" element={<PreviousEventsPage />} />
          <Route path="/place/:place" element={<PlacePage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
