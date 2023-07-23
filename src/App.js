import React from 'react';
import Expenses from './components/Expenses';

function App() {
  const expenses = [
        {id: 'e1', title : "Doll", amount : 20.0, date : new Date (2023, 5, 9) },
        {id: 'e2', title : "Tab", amount : 25.05, date : new Date (2023, 6, 9) },
        {id: 'e3', title : "Mat", amount : 100.25, date : new Date (2023, 7, 14) },
        {id: 'e4', title : "Ball", amount : 15.60, date : new Date (2023, 7, 19) }
      ];
 
  return (React.createElement(
    'div',
    {}, 
    React.createElement('h2', {}, "Let's get started!"),
    React.createElement(Expenses, {items : expenses})
    )

  //   <div>
  //     <h2>Let's get started!</h2>
  //     <Expenses items={expenses} />
  //   </div>
  // );
  )}


export default App;
