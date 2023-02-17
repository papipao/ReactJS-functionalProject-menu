import React, { useState } from 'react';
import './Index.css';
import menu from './data';
import Categories from './Categories';
import Menu from './Menu';

const allCategories = ['all', ...new Set(menu.map((item) => item.category))];

function Index() {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(menu);
      return;
    }
    const newItems = menu.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h1>our menu</h1>
          <div className='underline'></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default Index;
