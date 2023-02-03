import ItemBase from '../ItemBase';
import { EditableItem } from './EditableItem';

import './Profile.scss';

export default ({ picture }) => {
  return (
    <EditableItem targetValue={'picture'} label='Picture'>
      <ItemBase>
        <img src={picture} className='user' alt='...' />
      </ItemBase>
    </EditableItem>
  );
};
