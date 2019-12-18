import React from 'react';
import Grade from './Grade';

function GradeTable(props) {
  const gradesArrayToGrade = props.gradesArrayToTable.map((grade, index) => <Grade key={index} gradeProp={grade} removalProp= {props.removalMethod} />);

  return (
    <div className="col-9">
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Student Name</th>
            <th scope="col">Course</th>
            <th scope="col">Grade</th>
            <th scope="col">Operations</th>
          </tr>
        </thead>
        <tbody>{gradesArrayToGrade}</tbody>
      </table>
    </div>
  );
}

export default GradeTable;
