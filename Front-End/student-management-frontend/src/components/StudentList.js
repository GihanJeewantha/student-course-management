import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import studentService from '../services/studentService';

function StudentList() {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    studentService.getAllStudents().then(response => {
      setStudents(response.data);
    });
  }, []);

  const handleUpdateClick = (id) => {
    navigate(`/update-student/${id}`);
  };

  return (
    <div>
      <h2>Student List</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Course</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.course}</td>
              <td>
                <button onClick={() => handleUpdateClick(student.id)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
