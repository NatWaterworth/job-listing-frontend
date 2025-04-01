import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import JobList from './pages/JobList';
import JobDetails from './pages/JobDetails';
import CreateJob from './pages/CreateJob';
import EditJob from './pages/EditJob';
import NotFound from './pages/NotFound';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/jobs" element={<JobList />} />
                <Route path="/jobs/:id" element={<JobDetails />} />
                <Route path="/create" element={<CreateJob />} />
                <Route path="/edit/:id" element={<EditJob />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}
