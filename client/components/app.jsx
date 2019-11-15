import React from 'react';
import Header from './header';
import GradeTable from './GradeTable';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
    this.getAllGrades = this.getAllGrades.bind(this);
  }
  componentDidMount() {
    this.getAllGrades();
  }
  getAllGrades() {
    fetch('/api/grades')
      .then(response => response.json())
      .then(data => this.setState({ grades: data }))
      .catch(err => console.error('Get All Grades fetch failed', err));
  }
  render() {
    return (
      <div className = "container">
        <Header text="Student Grade Table"/>
        <GradeTable gradesArrayToTable = {this.state.grades}/>
      </div>
    );
  }
}

export default App;
