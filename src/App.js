import './App.css';
import ExpenseItem from './components/ExpenseItem';


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
    <>    <ExpenseItem
      title={expenses[0].title}
      amount={expenses[0].amount}
      date={expenses[0].date}
    />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date} />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date} />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date} />
      <ExpenseItem
        title={expenses[4].title}
        amount={expenses[4].amount}
        date={expenses[4].date}

      />

    </>
  );
}

export default App;
