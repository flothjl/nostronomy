import ItemBase from '../ItemBase';
import { EditableItem } from './EditableItem';

export default ({ picture }) => {
  return (
    <EditableItem targetValue={'picture'} label='Picture'>
      <ItemBase>
        <img src={picture} className='user' alt='...' />
      </ItemBase>
    </EditableItem>
  );
};
