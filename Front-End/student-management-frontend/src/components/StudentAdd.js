import React, { useState } from 'react';
import studentService from '../services/studentService';

function StudentAdd() {
  const [student, setStudent] = useState({ name: '', email: '', course: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    studentService.addStudent(student).then(() => {
      console.log('Student added successfully');
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type="text" value={student.name} onChange={(e) => setStudent({ ...student, name: e.target.value })} />

      <label>Email:</label>
      <input type="email" value={student.email} onChange={(e) => setStudent({ ...student, email: e.target.value })} />

      <label>Course:</label>
      <input type="text" value={student.course} onChange={(e) => setStudent({ ...student, course: e.target.value })} />

      <button type="submit">Add Student</button>
    </form>
  );
}

export default StudentAdd;
