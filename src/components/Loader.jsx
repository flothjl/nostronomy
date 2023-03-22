import ItemBase from './ItemBase';
const Loader = () => {
  return (
    <ItemBase>
      <div className='spinner-border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </div>
    </ItemBase>
  );
};

export default Loader;