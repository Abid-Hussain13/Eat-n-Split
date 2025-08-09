import Button from "./Button"
export default function ListFriend({ friend, onSlipShow, onOpenSplit }) {
  return (
  <li>
    {console.log(friend.balance)}
    <img src={friend.image} alt="friend picture" />
    <h3>{friend.name}</h3>
    {friend.balance < 0 && <p className='red'>You owe me ${friend.balance}</p>}
    {friend.balance > 0 && <p className='green'>I owe you ${friend.balance}</p>}
    {friend.balance === 0 && <p >You and {friend.name} are even</p>}
    <Button onClick={() => onSlipShow(friend)}>{ onOpenSplit && onOpenSplit.id === friend.id ? "Close" : "Select"}</Button>
  </li>
  )
}