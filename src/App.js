import './App.css';
import ExpenseDate from './components/Expenses/ExpenseDate';
import ExpenseItem from './components/Expenses/ExpenseItem';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'News paper',
      amount: 99,
      date: new Date(2022, 12, 5),
    },
    {
      id: 'e2',
      title: 'Books',
      amount: 499,
      date: new Date(2022, 3, 5),
    },
    {
      id: 'e3',
      title: 'Phone bill',
      amount: 99,
      date: new Date(2022, 2, 5),
    },
    {
      id: 'e4',
      title: 'Medicine',
      amount: 999,
      date: new Date(2022, 8, 5),
    },
    {
      id: 'e5',
      title: 'Fruits',
      amount: 199,
      date: new Date(2021, 11, 6),
    }

  ]
  return (
    <>
    <NewExpense />
    <Expenses items={expenses} />
    </>
  );
}

export default App;
