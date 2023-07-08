import './ExpenseDate.css'

function ExpenseDate(props) {
    const month = props.date.toLocaleString("en-IN", {month : "long"});
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString("en-IN", {day: '2-digit'});

    return (
        <div className='expense-date'>
        <div className="expense-date__day">{day}</div>
        <div className="expende-date__month">{year}</div>
        <div className="expende-date__year">{month}</div>
        </div>
    )
}

export default ExpenseDate;