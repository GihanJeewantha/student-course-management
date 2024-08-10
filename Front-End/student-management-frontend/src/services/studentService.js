import axios from 'axios';

const baseUrl = 'http://localhost:8080/api/students';

const studentService = {
  getAllStudents: () => {
    return axios.get(baseUrl);
  },
  getStudentById: (id) => {
    return axios.get(`${baseUrl}/${id}`);
  },
  addStudent: (student) => {
    return axios.post(baseUrl, student);
  },
  updateStudent: (id, student) => {
    return axios.put(`${baseUrl}/${id}`, student);
  },
  deleteStudent: (id) => {
    return axios.delete(`${baseUrl}/${id}`);
  },
};

export default studentService;
