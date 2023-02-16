import React, { Component } from 'react';

class Categories extends Component {
  render() {
    const { categories, filterCategory } = this.props;
    return (
      <div className='btn-container'>
        {categories.map((category, index) => (
          <button
            type='button'
            className='filter-btn'
            onClick={() => filterCategory(category)}
            key={index}
          >
            {category}
          </button>
        ))}
      </div>
    );
  }
}

export default Categories;
