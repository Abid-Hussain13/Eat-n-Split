import ListFriend from './ListFriend';
export default function Friends({FriendList, onSlipShow, onOpenSplit}){
  return (
    <ul>
      {FriendList.map((friend) => <ListFriend friend={friend} key={friend.id} onSlipShow={onSlipShow} onOpenSplit={onOpenSplit} />)}
    </ul>
  )
}