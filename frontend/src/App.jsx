import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import ExecutiveReport from './ExecutiveReport';
import Insights from './Insights';
import PullRequests from './PullRequests';
import Reports from './Reports';
import Repositories from './Repositories';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/executive-report" element={<ExecutiveReport />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/pull-requests" element={<PullRequests />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/repositories" element={<Repositories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
