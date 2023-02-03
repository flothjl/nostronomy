import ItemBase from './ItemBase';
import Emoji from './Profile/Emoji';
export default () => {
  return (
    <ItemBase>
      <div className='row'>
        <Emoji emoji={'😟'} />
      </div>
      <div className='row'>
        <span style={{ fontSize: '1.7rem' }}>something went wrong</span>
      </div>
    </ItemBase>
  );
};
