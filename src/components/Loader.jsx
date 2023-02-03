import ItemBase from './ItemBase';
export default () => {
  return (
    <ItemBase>
      <div className='spinner-border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </div>
    </ItemBase>
  );
};
