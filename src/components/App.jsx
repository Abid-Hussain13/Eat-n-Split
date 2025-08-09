import { useState } from 'react';
import FriendList from './FriendList';
import Button from './Button';
import FormAddFriend from './FormAddFriend';
import FormSplitBill from './FormSplitBill';
import Friends from './Friends';

export default function App() {
  const [addFriend, setAddFriend] = useState(false);
  const [FriendsList, setFriendsList] = useState(FriendList);
  const [openSplitBill, setOpenSplitBill] = useState(null);


  function addFriendForm(){
    console.log("clicked");
    console.log(FriendsList)
    setAddFriend(!addFriend);
  }
  function handleNewFriend(newFriend){
    setFriendsList(prev => [...prev, newFriend]);
    setAddFriend(false);
  }
  function handleSplitBillForm(friend){
    console.log("Spli form");
    setOpenSplitBill(prev => prev?.id === friend.id ? null : friend);
  }
  function handleFinalBill(value){
    console.log(value)
    setFriendsList(friends =>
      friends.map(friend => 
      friend.id === openSplitBill.id ? 
        {...friend, balance: value + friend.balance }
        : friend
      )
    )
    setOpenSplitBill(null);
  }

  return (
    <div className='app'>
      <div className='sidebar'>
        <Friends FriendList={FriendsList} onSlipShow={handleSplitBillForm} onOpenSplit={openSplitBill}/>
        {addFriend && <FormAddFriend onNewFriend={handleNewFriend}/>}
        <Button onClick={addFriendForm}>{addFriend ? "Close" : "Add Friend"}</Button>
      </div>
      {openSplitBill && <FormSplitBill friend={openSplitBill} onSplitBill={handleFinalBill}/> }
    </div>
  )
}









