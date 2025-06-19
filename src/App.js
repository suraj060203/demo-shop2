import './App.css';
import React from 'react';
import Products from './components/Products';

const App = () => {
  const products =[
  {
    id: 'p1',
    title: "Ariel",
    amount: 100,
    date: new Date(2023, 0, 28)
  },
  {
    id: 'p2',
    title: "Nirma",
    amount: 180,
    date: new Date(2021, 1, 2)
  },
  {
    id: 'p3',
    title: "Surf Excel",
    amount: 150,
    date: new Date(2023, 5, 25)
  },
  {
    id: 'p4',
    title: "Tide",
    amount: 200,
    date: new Date(2022, 3, 15)
  }
  ];

  return (
    <div>
      <Products items={products} />
    </div>

  );
}

export default App;
