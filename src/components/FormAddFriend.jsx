import {useState} from 'react';
import Button from './Button';

export default function FormAddFriend({onNewFriend}){
  const [friend, setFriend] = useState({
    id : 0,
    friendName: '',
    imgUrl: 'https://i.pravatar.cc/48'
  });
  function handleNewFriend(e){
    const { name, value } = e.target;
    setFriend(prev => ({
      ...prev,
      [name]: value
    }))
  }
  function handleSubmit(e){
    e.preventDefault();
    if(!friend.friendName && ! friend.imgUrl) return;
    const id = crypto.randomUUID();
    const newFriend={
      id: id,
      name: friend.friendName,
      image: `https://i.pravatar.cc/48?=${id}`,
      balance: 0
    }
    onNewFriend(newFriend);
    setFriend({friendName:"", imgUrl:"https://i.pravatar.cc/48"})
  }

  return(
    <form onSubmit={handleSubmit} className='form-add-friend'>
      <label>🧑‍🤝‍🧑 Friend</label>
      <input name='friendName' value={friend.friendName} type="text" onChange={handleNewFriend}/>
      <label>🌄 Image URL</label>
      <input name='imgUrl' value={friend.imgUrl} type="text" onChange={handleNewFriend} />
      <Button>Add</Button>
    </form>
  )
}
