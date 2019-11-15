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
    this.getAverageGrade = this.getAverageGrade.bind(this);
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
  getAverageGrade() {
    if (this.state.grades.length === 0) {
      return;
    }
    var averageGrade = 0;
    var students = this.state.grades.length;
    for (var studentIndex = 0; studentIndex < students; studentIndex++) {
      averageGrade += this.state.grades[studentIndex].grade;
    }
    const average = Math.round(averageGrade / studentIndex);
    return average;
  }
  render() {
    return (
      <div className = "container">
        <Header avgGradeProp = {this.getAverageGrade()} text="Student Grade Table"/>
        <GradeTable gradesArrayToTable = {this.state.grades}/>
      </div>
    );
  }
}

export default App;
