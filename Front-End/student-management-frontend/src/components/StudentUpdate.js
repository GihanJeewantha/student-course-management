import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import studentService from '../services/studentService';

function StudentUpdate() {
  const { id } = useParams();
  const [student, setStudent] = useState({ name: '', email: '', course: '' });

  useEffect(() => {
    studentService.getStudentById(id).then(response => {
      setStudent(response.data);
    });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    studentService.updateStudent(id, student).then(() => {
      console.log('Student updated successfully');
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

      <button type="submit">Update Student</button>
    </form>
  );
}

export default StudentUpdate;
