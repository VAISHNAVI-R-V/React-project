import './ExpenseItem.css'

function ExpenseItem(props) {
    const month = props.date.toLocaleString("en-IN", {month : "long"});
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString("en-IN", {day: '2-digit'});

    return (
    <div className = 'expense-item'>
        {/* <div>{expenseDate.toISOString()}</div> */}
        <div>
        {/* <div>{props.date.toLocaleString("en-IN", {month : "long"})}</div> */}
        <div className="expende-date">{day}</div>
        <div className="expende-date__month">{year}</div>
        <div className="expende-date__year">{month}</div>
        </div>

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