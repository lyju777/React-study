import React from "react";

const  students = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "David" },
];

function AttendanceBook(props) {
  return (
    <ul>
      {students.map((student)=> {
        return <li key={student.id}>{student.name}</li>
      })}
    </ul>
  )
}

export default AttendanceBook;