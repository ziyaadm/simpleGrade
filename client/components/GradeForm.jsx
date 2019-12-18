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
      <div className="col-3">
        <form onSubmit={this.handleSubmit} onReset={this.handleReset}>
          <div className="row">
            <div className="col-2 align-self-start">
              <i className="fas fa-user fa-2x"></i>
            </div>
            <div className="col-10">
              <div className="form-group">
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Name"
                  onChange={this.handleChange}
                  value={namevalue}
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-2 align-self-start">
              <i className="fas fa-book fa-2x"></i>
            </div>
            <div className="col-10">
              <div className="form-group">
                <input
                  name="course"
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput2"
                  placeholder="Course"
                  onChange={this.handleChange}
                  value={coursevalue}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-2 align-self-start">
              <i className="fas fa-check fa-2x"></i>
            </div>
            <div className="col-10">
              <div className="form-group">
                <input
                  name="grade"
                  type="number"
                  className="form-control"
                  id="formGroupExampleInput3"
                  placeholder="Grade"
                  onChange={this.handleChange}
                  value={gradevalue}
                />
              </div>
            </div>
          </div>
          <button
            type="reset"
            className="btn btn-primary ml-2 mt-2 float-right btn-warning"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="btn btn-primary mr-2 mt-2 float-right"
          >
            Add
          </button>
        </form>
      </div>
    );
  }
}
export default GradeForm;
