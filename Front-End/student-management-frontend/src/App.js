import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StudentList from './components/StudentList';
import StudentAdd from './components/StudentAdd';
import StudentUpdate from './components/StudentUpdate';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StudentList />} />
        <Route path="/students" element={<StudentList />} />
        <Route path="/add-student" element={<StudentAdd />} />
        <Route path="/update-student/:id" element={<StudentUpdate />} />
      </Routes>
    </Router>
  );
}

export default App;
