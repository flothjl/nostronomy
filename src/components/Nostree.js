export default ({ children }) => {
  return (
    <>
      <div className='container'>
        <div className={'row h-100 align-items-center'}>
          <div className={'col-12'}>
            <div className={'row'}>
              <div className='profile col-md-11 col-lg-11 col-11 my-auto mx-auto'>
                {children}
              </div>
            </div>
          </div>
        </div>
        <div className={'footer'}>
          <div className={'row'}>
            <div className={'col-12'}>
              <span
                className={'brand-font'}
                style={{ fontSize: '1.2rem', textAlign: 'center' }}
              >
                🫂{' '}
                <span
                  className={'brand-font'}
                  style={{ fontSize: '0.75rem', color: 'white' }}
                >
                  nostree
                </span>{' '}
                🤙
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
