import ItemBase from './ItemBase';
import Emoji from './Profile/Emoji';
const Error = () => {
  return (
    <ItemBase className='general-error'>
      <div className='row'>
        <Emoji emoji={'😟'} />
      </div>
      <div className='row'>
        <span className='message'>something went wrong</span>
      </div>
    </ItemBase>
  );
};

export default Error;
