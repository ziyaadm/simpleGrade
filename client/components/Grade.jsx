import React from 'react';

function Grade(props) {

  return (
    <tr>
      <td>{props.gradeProp.name}</td>
      <td>{props.gradeProp.course}</td>
      <td>{props.gradeProp.grade}</td>
    </tr>
  );
}

export default Grade;
