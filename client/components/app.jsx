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
    this.addNewGrade = this.addNewGrade.bind(this);
    this.deleteGrade = this.deleteGrade.bind(this);
  }
  componentDidMount() {
    this.getAllGrades();
  }
  addNewGrade(newGrade) {
    fetch('/api/grades', {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify(newGrade)
    }).then(response => response.json())
      .then(data => this.setState({ grades: this.state.grades.concat(newGrade) }))
      .catch(err => console.error('Get All Grades fetch failed', err));
  }
  getAllGrades() {
    fetch('/api/grades')
      .then(response => response.json())
      .then(data => this.setState({ grades: data }))
      .catch(err => console.error('Get All Grades fetch failed', err));
  }
  deleteGrade(id) {
    const array = [...this.state.grades];
    const index = array.findIndex(x => x.id === id);
    array.splice(index, 1);

    fetch(`/api/grades/${id}`, {
      headers: { 'Content-Type': 'application/json' },
      method: 'DELETE'
    }).then(response => response.json())
      .then(data => this.setState({ grades: array }))
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
      <div className="container">
        <Header
          avgGradeProp={this.getAverageGrade()}
          text="Student Grade Table"
        />
        <div className="row">
          <GradeTable
            gradesArrayToTable={this.state.grades}
            onSubmit={this.addNewGrade}
            removalMethod={this.deleteGrade}
          />
          {/* <GradeForm onSubmit={this.addNewGrade} /> */}
        </div>
      </div>
    );
  }
}

export default App;
