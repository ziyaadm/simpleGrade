import React from 'react';

class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course: '',
      grade: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  handleChange(event) {
    let newState = {};
    newState[event.target.name] = event.target.value;

    this.setState(newState);
  }
  handleSubmit(event) {
    event.preventDefault();
    const newGrade = {
      name: this.state.name,
      course: this.state.course,
      grade: parseInt(this.state.grade)
    };
    this.props.onSubmit(newGrade);
    this.handleReset();
  }
  handleReset() {
    this.setState({
      name: '',
      course: '',
      grade: ''
    });
  }
  render() {
    const namevalue = this.state.name;
    const coursevalue = this.state.course;
    const gradevalue = this.state.grade;

    return (
      <form onSubmit={this.handleSubmit} onReset={this.handleReset}>
        <div className="form-group float-right col-md-4">
          <label htmlFor="formGroupExampleInput"></label>
          <input name = "name" type="text" className="form-control" id="formGroupExampleInput" placeholder="Name" onChange={this.handleChange} value={namevalue}/>
        </div>
        <div className="form-group float-right col-md-4">
          <label htmlFor="formGroupExampleInput2"></label>
          <input name="course" type="text" className="form-control" id="formGroupExampleInput2" placeholder="Course" onChange={this.handleChange} value={coursevalue}/>
        </div>
        <div className="form-group float-right col-md-4">
          <label htmlFor="formGroupExampleInput2"></label>
          <input name = "grade" type="number" className="form-control" id="formGroupExampleInput2" placeholder="Grade" onChange={this.handleChange} value={gradevalue}/>
          <button type="reset" className="btn btn-primary mb-2 float-right">Cancel</button>
          <button type="submit" className="btn btn-primary mb-2 float-right">Add</button>
        </div>
      </form>
    );
  }
}
export default GradeForm;
