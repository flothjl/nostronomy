import {EditableItem} from './EditableItem';
import ItemBase from '../ItemBase';
import './Profile.scss';
export default ({ data }) => {
  return (
    <EditableItem targetValue={'about'} label='About'>
      {data ? (
        <ItemBase>
          <div className='about'>
            <span className='about-emoji'>{'📖 '}</span>
            {data}
          </div>
        </ItemBase>
      ) : (
        <></>
      )}
    </EditableItem>
  );
};
