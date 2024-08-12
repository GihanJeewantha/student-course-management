import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import studentService from '../services/studentService';
import './StudentList.css'; // Import the CSS file

function StudentList() {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    studentService.getAllStudents().then((response) => {
      setStudents(response.data);
    });
  }, []);

  const handleUpdateClick = (id) => {
    navigate(`/update-student/${id}`);
  };

  const handleDeleteClick = (id) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      studentService
        .deleteStudent(id)
        .then(() => {
          // Refresh the list after deletion
          setStudents(students.filter((student) => student.id !== id));
        })
        .catch((error) => {
          console.error('There was an error deleting the student!', error);
        });
    }
  };

  // New function to handle add student button click
  const handleAddStudentClick = () => {
    navigate('/add-student'); // Ensure this route is set up in your router
  };

  return (
    <div className="container">
      <h2>Student List</h2>
      {/* New button for adding a student */}
      <button className="button add-button" onClick={handleAddStudentClick}>
        Add New Student
      </button>
      <table className="table">
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
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.course}</td>
              <td>
                <button
                  className="button update-button"
                  onClick={() => handleUpdateClick(student.id)}
                >
                  Update
                </button>
                <button
                  className="button delete-button"
                  onClick={() => handleDeleteClick(student.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
