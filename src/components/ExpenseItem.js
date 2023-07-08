import './ExpenseItem.css'
// function ExpenseItem(props) {
    // object destructuring {date, amount, title}
function ExpenseItem({date, amount, title}) {


    const expenseDate = new Date(2023, 5, 7);
    const expenseTitle = 'Bag';
    const expenseAmount = 55500;

    return <div className = 'expense-item'>
        {/* <div>{expenseDate.toISOString()}</div> */}
        {/* <div>{props.date.toISOString()}</div> */}
        <div>{date.toISOString()}</div>


        <div className = 'expense-item__description'>
            {/* <h2>{expenseTitle}</h2> */}
            {/* <h2>{props.title}</h2> */}
            <h2>{title}</h2>


        </div>
        {/* <div className = 'expense-item__price'> $ {expenseAmount}</div> */}
        {/* <div className = 'expense-item__price'> $ {props.amount}</div> */}
        <div className = 'expense-item__price'> $ {amount}</div>


    </div>
}
export default ExpenseItem;