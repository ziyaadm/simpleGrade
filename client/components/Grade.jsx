import React from 'react';

function Grade(props) {
  return (
    <tr>
      <td>{props.gradeProp.name}</td>
      <td>{props.gradeProp.course}</td>
      <td>{props.gradeProp.grade}</td>
      <td>
        <button
          onClick={() => props.removalProp(props.gradeProp.id)}
          type="delete"
          className="btn btn-primary mb-2 btn-danger"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default Grade;
