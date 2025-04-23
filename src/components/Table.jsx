import React from 'react';

function Table({ students }) {
  if (!students || students.length === 0) {
    return <p>No student found with the given registration number.</p>;
  }

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Reg No</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student.regno}>
            <td>{student.regno}</td>
            <td>{student.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;






