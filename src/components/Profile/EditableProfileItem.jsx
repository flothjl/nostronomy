import { useRecoilState } from 'recoil';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';

import { Base } from '../EditableItem';
import { profileDataState, profileEditState } from '../../recoilState';

const EditableItem = ({ targetValue, label, children }) => {
  const [profileEdit] = useRecoilState(profileEditState);
  const [profileData, setProfileDataState] = useRecoilState(profileDataState);
  const setProfileData = (targetValue, value) => {
    setProfileDataState((data) => {
      return {
        ...data,
        [targetValue]: value,
      };
    });
  };

  if (profileEdit) {
    return (
      <Base
        setter={(value) => setProfileData(targetValue, value)}
        label={label}
        value={profileData?.[targetValue] || ''}
      />
    );
  } else {
    return <>{children}</>;
  }
};

const EditableLinks = ({ items, children }) => {
  const [profileEdit] = useRecoilState(profileEditState);
  const [, setProfileDataState] = useRecoilState(profileDataState);

  const setProfileLink = (value, index, subIndex) => {
    setProfileDataState((data) => {
      const newVal = JSON.parse(JSON.stringify(data.links));
      newVal[index][subIndex] = value;
      return {
        ...data,
        links: newVal,
      };
    });
  };

  const handleLinkRemove = (idx) => {
    setProfileDataState((oldState) => {
      const newState = [...oldState?.links];
      newState.splice(idx, 1);
      return {
        ...oldState,
        links: newState,
      };
    });
  };

  const handleLinkAdd = () => {
    setProfileDataState((oldState) => {
      const newState = [...(oldState.links || []), ['', '']];
      return {
        ...oldState,
        links: newState,
      };
    });
  };

  if (profileEdit) {
    return (
      <>
        <div className='row'>
          {(items || []).map((item, idx) => {
            return (
              <div key={idx} className='row'>
                <div className='col'>
                  <Base
                    setter={(value) => setProfileLink(value, idx, 0)}
                    key={`${idx}${0}`}
                    label={'URL'}
                    value={item[0]}
                  />
                </div>
                <div className='col'>
                  <Base
                    setter={(value) => setProfileLink(value, idx, 1)}
                    key={`${idx}${1}`}
                    label={'Name'}
                    value={item[1]}
                  />
                </div>
                <div className='col-1'>
                  <div className='row align-items-center h-100'>
                    <div className='col-12'>
                      <FontAwesomeIcon
                        onClick={() => {
                          handleLinkRemove(idx);
                        }}
                        icon={faTrashCan}
                        style={{ verticalAlign: 'middle' }}
                        size='lg'
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className='row justify-content-center mt-1'>
          <div className='d-grid gap-2'>
            <button className='btn btn-secondary' onClick={handleLinkAdd}>
              New Link
            </button>
          </div>
        </div>
      </>
    );
  } else {
    return <>{children}</>;
  }
};

export { EditableLinks, EditableItem };
