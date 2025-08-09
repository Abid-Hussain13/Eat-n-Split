import {useState} from 'react';
import Button from './Button';

export default function FormSplitBill({friend, onSplitBill}){
  const [bill, setBill] = useState("");
  const [yourExpense, setYourExpense] = useState("");
  const FriendPaid = bill ? bill - yourExpense : '';
  const[paidBy, setPaidBy] = useState('user');

  function handleBill(e){
    e.preventDefault();
    if(!bill || !yourExpense) return;
    onSplitBill(paidBy === 'user'? FriendPaid : -yourExpense)
  }


  return(
    <form className='form-split-bill' onSubmit={handleBill}>
      <h2>Split a bill with {friend.name}</h2>
      <label>💰 Bill Value</label>
      <input type="text" onChange={e => setBill(Number(e.target.value))} value={bill} />
      <label>🧍‍♀️ Your Expense</label>
      <input type="text" onChange={e => setYourExpense(Number(e.target.value))} value={yourExpense} />
      <label>🧍 {friend.name} Expense</label>
      <input type="text" value={FriendPaid} disabled/>
      <label>🤑 Who is paying the bill</label>
      <select onChange={(e) => setPaidBy(Number(e.target.value) > bill? yourExpense : Number(e.target.value))}>
        <option value="user">You</option>
        <option value="friend">{friend.name}</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  )
}