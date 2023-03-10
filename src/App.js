import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const Dummy_expenses = [
  {
    id: 'e1',
    title: 'New Book',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: 'e5',
    title: 'New Desk (Wooden)',
    amount: 499,
    date: new Date(2022, 5, 12),
  },
  {
    id: 'e6',
    title: 'Shoppig',
    amount: 999,
    date: new Date(2022, 1, 2),
  },
    {
    id: 'e7',
    title: 'Vacations',
    amount: 999,
    date: new Date(2022, 1, 8),
  },
  {
    id: 'e8',
    title: 'Furniture',
    amount: 1399,
    date: new Date(2022, 2, 1),
  },
];

function App() {
  const [expenses, setExpenses] = useState(Dummy_expenses);
  console.log(Dummy_expenses.length);
  
  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };
  // return React.createElement('div',
  // {},
  // React.createElement('h2',{},"Let's get started"),
  // React.createElement(Expenses,{items:expenses})
  // );
  // ;
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
     
      <Expenses items={expenses} />
    </div>
  );
}

export default App;