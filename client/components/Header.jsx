import React from 'react';

function Header(props) {
  return (
    <div className="row">
      <h1 className="col-8">{props.text}</h1>
      <h2 className="col-4 text-right">Average Grade <span className="badge badge-secondary">{props.avgGradeProp}</span></h2>
    </div>
  );
}

export default Header;
