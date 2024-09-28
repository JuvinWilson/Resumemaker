import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register.js';
import Login from './components/Login.js';
import Profile from './components/Profile.js';
import TemplateSelection from './components/TemplateSelection.js';
import WorkExperience from './components/WorkExperience.js';
import ResumePreview from './components/Resumepreview.js';
import Ui from './components/Ui.js';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Ui />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/template" element={<TemplateSelection />} />
                <Route path="/work-experience" element={<WorkExperience />} />
                <Route path="/resumepreview" element={<ResumePreview />} />
            </Routes>
        </Router>
    );
}

export default App;
