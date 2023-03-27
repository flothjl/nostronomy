
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';

import ItemBase from './ItemBase';

const Base = ({ value, label, setter }) => {
  return (
    <ItemBase style={{ marginTop: '10px' }}>
      <div className='input-group'>
        <span className='input-group-text' id={label}>
          {label}
        </span>
        <input
          type='text'
          className='form-control'
          id={label}
          aria-describedby={label}
          onChange={(e) => {
            setter(e.target.value);
          }}
          value={value}
        />
      </div>
    </ItemBase>
  );
};

const EditableItem = ({ value, setter, label }) => {
  return <Base setter={(value) => setter(value)} label={label} value={value} />;
};

const EditableItemList = ({ items, setter, label, buttonLabel }) => {


  const setValue = (value, index) => {
    setter((oldState) => {
      const newVal = [...oldState]
      newVal[index] = value;
      return newVal;
    });
  };

  const removeValue = (idx) => {
    setter((oldState) => {
      const newState = [...oldState];
      newState.splice(idx, 1);
      return newState;
    });
  };

  const addValue = () => {
    setter((oldState) => {
      const newState = [...oldState, ''];
      return newState
    });
  };

  return (
    <>
      <div className='row'>
        {(items || []).map((item, idx) => {
          return (
            <div key={idx} className='row'>
              <div className='col'>
                <Base
                  setter={(value) => setValue(value, idx)}
                  key={`${idx}`}
                  label={label}
                  value={item}
                />
              </div>
              <div className='col-1'>
                <div className='row align-items-center h-100'>
                  <div className='col-12'>
                    <FontAwesomeIcon
                      onClick={() => {
                        removeValue(idx);
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
          <button className='btn btn-secondary' onClick={addValue}>
            {buttonLabel}
          </button>
        </div>
      </div>
    </>
  );
};

export { EditableItemList, EditableItem };
