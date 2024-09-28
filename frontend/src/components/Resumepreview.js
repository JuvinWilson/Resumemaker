import React, { useState } from 'react';
import './Resumepreview.css';

const ResumeBuilder = () => {
    const [profile, setProfile] = useState({
        name: '',
        phone: '',
        address: '',
        workExperience: [{ company: '', position: '', startDate: '', endDate: '', description: '' }],
        education: [{ school: '', degree: '', startDate: '', endDate: '', description: '' }],
        skills: [''],
        achievements: [{ title: '', date: '', description: '' }]
    });

    // Handle change in form input
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfile({ ...profile, [name]: value });
    };

    // Handle dynamic fields like work experience
    const handleWorkExperienceChange = (index, e) => {
        const { name, value } = e.target;
        const updatedWorkExperience = [...profile.workExperience];
        updatedWorkExperience[index][name] = value;
        setProfile({ ...profile, workExperience: updatedWorkExperience });
    };

    // Handle dynamic fields like education
    const handleeducationChange = (index, e) => {
        const { name, value } = e.target;
        const updatededucation = [...profile.education];
        updatededucation[index][name] = value;
        setProfile({ ...profile, education: updatededucation });
    };

    // Add new work experience entry
    const addWorkExperience = () => {
        setProfile({
            ...profile,
            workExperience: [...profile.workExperience, { company: '', position: '', startDate: '', endDate: '', description: '' }]
        });
    };

    // Add new education entry
    const addeducation = () => {
        setProfile({
            ...profile,
            education: [...profile.education, { school: '', degree: '', startDate: '', endDate: '', description: '' }]
        });
    };

    return (
        <div className="resume-builder-container">
            <div className="form-section">
                <h2>Contact</h2>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={profile.name} onChange={handleInputChange} />
                </div>
                <div>
                    <label>Phone:</label>
                    <input type="text" name="phone" value={profile.phone} onChange={handleInputChange} />
                </div>
                <div>
                    <label>Address:</label>
                    <input type="text" name="address" value={profile.address} onChange={handleInputChange} />
                </div>

                <h3>Work Experience</h3>
                {profile.workExperience.map((exp, index) => (
                    <div key={index}>
                        <label>Company:</label>
                        <input type="text" name="company" value={exp.company} onChange={(e) => handleWorkExperienceChange(index, e)} />
                        <label>Position:</label>
                        <input type="text" name="position" value={exp.position} onChange={(e) => handleWorkExperienceChange(index, e)} />
                        <label>Start Date:</label>
                        <input type="date" name="startDate" value={exp.startDate} onChange={(e) => handleWorkExperienceChange(index, e)} />
                        <label>End Date:</label>
                        <input type="date" name="endDate" value={exp.endDate} onChange={(e) => handleWorkExperienceChange(index, e)} />
                        <label>Description:</label>
                        <textarea name="description" value={exp.description} onChange={(e) => handleWorkExperienceChange(index, e)} />
                    </div>
                ))}
                <button onClick={addWorkExperience}>Add More Work Experience</button>

                <h3>Education</h3>
                {profile.education.map((edu, index) => (
                    <div key={index}>
                        <label>School:</label>
                        <input type="text" name="school" value={edu.school} onChange={(e) => handleeducationChange(index, e)} />
                        <label>Degree:</label>
                        <input type="text" name="degree" value={edu.degree} onChange={(e) => handleeducationChange(index, e)} />
                        <label>Start Date:</label>
                        <input type="date" name="startDate" value={edu.startDate} onChange={(e) => handleeducationChange(index, e)} />
                        <label>End Date:</label>
                        <input type="date" name="endDate" value={edu.endDate} onChange={(e) => handleeducationChange(index, e)} />
                        <label>Description:</label>
                        <textarea name="description" value={edu.description} onChange={(e) => handleeducationChange(index, e)} />
                    </div>
                ))}
                <button onClick={addeducation}>Add</button>
            </div>

            {/* Live Preview Section */}
            <div className="preview-section">
                <div className="resume-preview">
                    <h1>{profile.name || 'Your Name'}</h1>
                    <p>{profile.phone || 'Phone Number'}</p>
                    <p>{profile.address || 'Your Address'}</p>

                    <h3>Work Experience</h3>
                    {profile.workExperience.map((exp, index) => (
                        <div key={index}>
                            <h4>{exp.company || 'Company Name'}</h4>
                            <p>{exp.position || 'Position'}</p>
                            <p>
                                {exp.startDate ? new Date(exp.startDate).toLocaleDateString() : 'Start Date'} -{' '}
                                {exp.endDate ? new Date(exp.endDate).toLocaleDateString() : 'End Date'}
                            </p>
                            <p>{exp.description || 'Description'}</p>
                        </div>
                    ))}

                    <h3>Education</h3>
                    {profile.education.map((edu, index) => (
                        <div key={index}>
                            <h4>{edu.school || 'School Name'}</h4>
                            <p>{edu.degree || 'Degree'}</p>
                            <p>
                                {edu.startDate ? new Date(edu.startDate).toLocaleDateString() : 'Start Date'} -{' '}
                                {edu.endDate ? new Date(edu.endDate).toLocaleDateString() : 'End Date'}
                            </p>
                            <p>{edu.description || 'Description'}</p>
                        </div>
                    ))}

                    <h3>Skills</h3>
                    <ul>
                        {profile.skills && profile.skills.map((skill, index) => (
                            <li key={index}>{skill || 'Skill'}</li>
                        ))}
                    </ul>

                    <h3>Achievements</h3>
                    {profile.achievements.map((ach, index) => (
                        <div key={index}>
                            <h4>{ach.title || 'Achievement Title'}</h4>
                            <p>{ach.date ? new Date(ach.date).toLocaleDateString() : 'Date'}</p>
                            <p>{ach.description || 'Description'}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ResumeBuilder;

