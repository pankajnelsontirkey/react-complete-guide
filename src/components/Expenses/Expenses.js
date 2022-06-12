import Card from '../UI/Card/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = ({ items }) => (
  <Card className='expenses'>
    {items.map((expense) => (
      <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        key={expense.title}
      />
    ))}
  </Card>
);

export default Expenses;
