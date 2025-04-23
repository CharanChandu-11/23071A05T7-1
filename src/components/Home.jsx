import React, { useState } from 'react';
import Table from './Table';

const students = [
  { regno: '101', name: 'Charan' },
  { regno: '101', name: 'Bhavya' },
  { regno: '101', name: 'Vishnu' },
  { regno: '103', name: 'Sairam' },
  { regno: '104', name: 'Ananya' },
  { regno: '102', name: 'Rohit' },
  { regno: '101', name: 'Meera' },
  { regno: '109', name: 'Sneha' },
  { regno: '105', name: 'Arjun' }
];

function Home() {
  const [regno, setRegno] = useState('');
  const [filteredStudents, setFilteredStudents] = useState([]);
  const handleSearch = () => {
    const filtered = students.filter(student => student.regno === regno);
    setFilteredStudents(filtered);
  };

  return (
    <div className="container">
      <h2>Student Details Enquiry</h2>
      <div className="mb-3">
        <label htmlFor="regnoInput" className="form-label">Enter Registration Number (Regno)</label>
        <input
          type="text"
          id="regnoInput"
          className="form-control"
          value={regno}
          onChange={(e) => setRegno(e.target.value)}
          placeholder="Enter registration number"
        />
      </div>
      <button className="btn btn-primary mb-3" onClick={handleSearch}>Search</button>
      <Table students={filteredStudents} />
    </div>
  );
}

export default Home;