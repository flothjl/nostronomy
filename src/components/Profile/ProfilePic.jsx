import ItemBase from '../ItemBase';
import { EditableItem } from './EditableProfileItem';

const ProfilePic = ({ picture }) => {
  return (
    <EditableItem targetValue={'picture'} label='Picture'>
      <ItemBase>
        <img src={picture} className='user' alt='...' />
      </ItemBase>
    </EditableItem>
  );
};

export default ProfilePic;
