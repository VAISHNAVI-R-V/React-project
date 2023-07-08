import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {

  const expenses = [
    {id: 'e1', title : "Doll", amount : 200, date : new Date (2023, 5, 9) },
    {id: 'e2', title : "Tab", amount : 250, date : new Date (2023, 6, 9) },
    {id: 'e3', title : "Mat", amount : 100, date : new Date (2023, 7, 14) },
    {id: 'e4', title : "Ball", amount : 150, date : new Date (2023, 7, 19) }

  ];
  
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <h2>Let's Start Dear :)</h2>

      <ExpenseItem 
      title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}>
      </ExpenseItem>
      <ExpenseItem 
      title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}>
      </ExpenseItem>
      <ExpenseItem 
      title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}>
      </ExpenseItem>
      <ExpenseItem 
      title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}>
      </ExpenseItem>
      {/* <ExpenseItem></ExpenseItem>
      <ExpenseItem></ExpenseItem> */}


    </div>
  );
}

export default App;
