import React, { Component } from 'react';

class FilteredList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      type: "All" 
    };
  }

  onFilter = (eventKey) => {
    this.setState({ type: eventKey });
  }

  filterItem = (item) => {
    const matchesSearch = item.name.toLowerCase().search(this.state.search.toLowerCase()) !== -1;
    
    const matchesType = this.state.type === "All" || item.type === this.state.type;

    return matchesSearch && matchesType;
  }

  render() {
    return (
      <div className="filter-container">
        <DropdownButton title="Filter" onSelect={this.onFilter}>
          <MenuItem eventKey="All">All</MenuItem>
          <MenuItem eventKey="Fruit">Fruit</MenuItem>
          <MenuItem eventKey="Vegetable">Vegetable</MenuItem>
        </DropdownButton>
      </div>
    );
  }
}

export default FilteredList;