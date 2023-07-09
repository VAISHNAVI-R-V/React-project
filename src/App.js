// // import logo from './logo.svg';
// // import './App.css';
// // import ExpenseItem from './components/ExpenseItem';
// import Expenses from './components/Expenses';

// function App() {

//   const expenses = [
//     {id: 'e1', title : "Doll", amount : 200, date : new Date (2023, 5, 9) },
//     {id: 'e2', title : "Tab", amount : 250, date : new Date (2023, 6, 9) },
//     {id: 'e3', title : "Mat", amount : 100, date : new Date (2023, 7, 14) },
//     {id: 'e4', title : "Ball", amount : 150, date : new Date (2023, 7, 19) }

//   ];
  
//   return (
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
//     <div>
//       <h2>Let's Start Dear :)</h2>

     
//       {/* <ExpenseItem></ExpenseItem>
//       <ExpenseItem></ExpenseItem> */}

//       <Expenses items = {expenses} />
//     </div>
//   );
// }

// export default App;

import Expenses from './components/Expenses';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
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
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
