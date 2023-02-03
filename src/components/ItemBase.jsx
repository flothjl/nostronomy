import './style.scss'
export default ({ children, style={} }) => {
  return (
    <div className='row text-center'>
      <div className='col-12 item-base' style={{...style}}>{children}</div>
    </div>
  );
};
