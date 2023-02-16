import React, { Component } from 'react';
import Categories from './Categories';
import Menu from './Menu';
import menu from './data';
import './Index.css';

const allCategories = ['all', ...new Set(menu.map((item) => item.category))];

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: menu,
      categories: allCategories,
    };
    this.filterCategory = this.filterCategory.bind(this);
  }

  filterCategory(category) {
    if (category === 'all') {
      this.setState({
        menuItems: menu,
      });
      return;
    }
    const newItem = menu.filter((item) => item.category === category);
    this.setState({
      menuItems: newItem,
    });
  }

  render() {
    return (
      <main>
        <div className='title'>
          <h1>our menu</h1>
          <div className='underline'></div>
        </div>
        <Categories categories={this.state.categories} filterCategory={this.filterCategory} />
        <Menu items={this.state.menuItems} />
      </main>
    );
  }
}

export default Index;
