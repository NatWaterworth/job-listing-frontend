import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/Home';
import JobListPage from './pages/JobList';
import JobDetailPage from './pages/JobDetail';
import CreateJobPage from './pages/CreateJob';
import EditJobPage from './pages/EditJob';
import NotFoundPage from './pages/NotFound';
import ApplicationPage from "./pages/ApplicationPage";

export default function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/jobs" element={<JobListPage />} />
                <Route path="/jobs/:id" element={<JobDetailPage />} />
                <Route path="/create" element={<CreateJobPage />} />
                <Route path="/edit/:id" element={<EditJobPage />} />
                <Route path="/apply" element={<ApplicationPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Router>
    );
}
