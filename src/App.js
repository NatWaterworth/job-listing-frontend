import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import JobListPage from './pages/JobListPage';
import JobDetailPage from './pages/JobDetailPage';
import NotFoundPage from './pages/NotFoundPage';
import ApplicationPage from "./pages/ApplicationPage";
import MyJobsPage from "./pages/MyJobsPage";

export default function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<JobListPage />} />
                <Route path="/jobs/:id" element={<JobDetailPage />} />
                <Route path="/my-jobs" element={<MyJobsPage />} />
                <Route path="/apply" element={<ApplicationPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Router>
    );
}
