import React from "react"
export class TaskFilter extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        selectedFilter: 'all',
      };
    }

    handleChange = (filter) => {
      this.setState({ selectedFilter: filter });
      this.props.onFilterChange(filter); 
    };
  
    render() {
      const { selectedFilter } = this.state;
  
      return (
        <ul className='footer__task-filter'>
          <li className='task-filter__radio-button'>
            <input
              type="radio"
              id="all"
              name="taskFilter"
              className="radio-button__radio"
              checked={selectedFilter === 'all'}
              onChange={() => this.handleChange('all')}
            />
            <label
              htmlFor="all"
              className={`radio-button__label ${selectedFilter === 'all' ? 'radio-button__label--selected' : ''}`}
            >
              All
            </label>
          </li>
          <li className='task-filter__radio-button'>
            <input
              type="radio"
              id="active"
              name="taskFilter"
              className="radio-button__radio"
              checked={selectedFilter === 'active'}
              onChange={() => this.handleChange('active')}
            />
            <label
              htmlFor="active"
              className={`radio-button__label ${selectedFilter === 'active' ? 'radio-button__label--selected' : ''}`}
            >
              Active
            </label>
          </li>
          <li className='task-filter__radio-button'>
            <input
              type="radio"
              id="completed"
              name="taskFilter"
              className="radio-button__radio"
              checked={selectedFilter === 'completed'}
              onChange={() => this.handleChange('completed')}
            />
            <label
              htmlFor="completed"
              className={`radio-button__label ${selectedFilter === 'completed' ? 'radio-button__label--selected' : ''}`}
            >
              Completed
            </label>
          </li>
        </ul>
      );
    }
}
  

