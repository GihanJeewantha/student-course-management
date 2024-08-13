import React, { useState } from 'react';
import studentService from '../services/studentService';
import './StudentAdd.css'; // Import the CSS file

function StudentAdd() {
  const [student, setStudent] = useState({ name: '', email: '', course: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    studentService.addStudent(student).then(() => {
      console.log('Student added successfully');
      setStudent({ name: '', email: '', course: '' }); // Reset form fields after submission
    });
  };

  return (
    <div className="form-container">
      <h2>Add New Student</h2>
      <form onSubmit={handleSubmit} className="student-form">
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={student.name}
            onChange={(e) => setStudent({ ...student, name: e.target.value })}
            placeholder="Enter student's name"
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={student.email}
            onChange={(e) => setStudent({ ...student, email: e.target.value })}
            placeholder="Enter student's email"
            required
          />
        </div>
        <div className="form-group">
          <label>Course:</label>
          <input
            type="text"
            value={student.course}
            onChange={(e) => setStudent({ ...student, course: e.target.value })}
            placeholder="Enter course name"
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Add Student
        </button>
      </form>
    </div>
  );
}

export default StudentAdd;
