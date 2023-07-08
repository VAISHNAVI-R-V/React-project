import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {
    
    return (
    <div className = 'expense-item'>
        <ExpenseDate date= {props.date}></ExpenseDate>
        {/* <div>{expenseDate.toISOString()}</div> */}
        {/* <div>{props.date.toLocaleString("en-IN", {month : "long"})}</div> */}

        <div className = 'expense-item__description'>
            {/* <h2>{expenseTitle}</h2> */}
            <h2>{props.title}</h2>
        </div>
        {/* <div className = 'expense-item__price'> $ {expenseAmount}</div> */}
        <div className = 'expense-item__price'> $ {props.amount}</div>
    </div>
    );
}
export default ExpenseItem;