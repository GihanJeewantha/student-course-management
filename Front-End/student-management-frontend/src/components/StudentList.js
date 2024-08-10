import React, { useEffect, useState } from 'react';
import studentService from '../services/studentService';

function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    studentService.getAllStudents().then(response => {
      setStudents(response.data);
    });
  }, []);

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
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.course}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
