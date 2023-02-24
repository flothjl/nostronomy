export default ({ children, ...props }) => {
  return (
    <div className={`row text-center`} >
      <div className={`col-12 item-base  ${props.className || ''}`} {...props}>{children}</div>
    </div>
  );
};
