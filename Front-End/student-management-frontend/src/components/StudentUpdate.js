import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import studentService from '../services/studentService';

function StudentUpdate() {
  const { id } = useParams();
  const [student, setStudent] = useState({ id: '', name: '', email: '', course: '' });
  const navigate = useNavigate();

  useEffect(() => {
    studentService.getStudentById(id).then(response => {
      setStudent(response.data);
    });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent(prevStudent => ({ ...prevStudent, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    studentService.updateStudent(id, student).then(() => {
      navigate('/students');
    });
  };

  return (
    <div>
      <h2>Update Student</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={student.name} onChange={handleChange} required />

        <label>Email:</label>
        <input type="email" name="email" value={student.email} onChange={handleChange} required />

        <label>Course:</label>
        <input type="text" name="course" value={student.course} onChange={handleChange} required />

        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default StudentUpdate;
