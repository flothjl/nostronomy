import {useState} from 'react'
import ManageRelays from "./ManageRelays";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
const Nostree = ({ children }) => {
  const [showManageRelays, setShowManageRelays] = useState(false);
  return (
    <>
      <div className='container'>
        <div className='header'>
          <div className='row'>
            <div className='col mx-2 my-2'>
            <FontAwesomeIcon
                      onClick={() => {
                        setShowManageRelays(old => !old)
                      }}
                      icon={faGear}
                      style={{ verticalAlign: 'middle', color: 'white' }}
                      size='lg'
                    />
            </div>
          </div>
        </div>
        <div className={'row h-100 align-items-center mx-1'}>
          <div className={'profile col-12'}>
            <div className={'row'}>
              <div className='col-md-11 col-lg-11 col-11 my-auto mx-auto'>
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
                  nostronomy
                </span>{' '}
                🤙
              </span>
            </div>
          </div>
        </div>
      </div>
      <ManageRelays show={showManageRelays} toggle={setShowManageRelays}/>
    </>
  );
};

export default Nostree; 
