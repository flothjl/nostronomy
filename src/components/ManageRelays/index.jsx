import { useState } from 'react';

import { Modal } from 'react-bootstrap';
import ItemBase from '../ItemBase';
import { EditableItemList } from '../EditableItem';
import { useRecoilState } from 'recoil';

import { relayUrlState } from '../../recoilState';

const ManageRelays = ({ show, toggle }) => {
  const [relays, setRelays] = useRecoilState(relayUrlState);

  const [newRelays, setNewRelays] = useState(relays);

  const handleClose = () => {
    toggle(false);
  };

  const handleSubmit = () => {
    setRelays(newRelays.filter(relay => !!relay));
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>⚙️ Manage Relays</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditableItemList
            items={newRelays}
            setter={setNewRelays}
            label='Url'
            buttonLabel='Add'
          />
        <div className='row justify-content-center mt-1'>
            <div className='d-grid gap-2'>
              <button className='btn btn-primary' onClick={handleSubmit}>
                Save
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ManageRelays;
