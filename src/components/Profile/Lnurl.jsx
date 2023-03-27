import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import QRCode from 'react-qr-code';
import { EditableItem } from './EditableProfileItem';
import ItemBase from '../ItemBase';
import Emoji from './Emoji';

const Lnurl = ({ lud06 }) => {
  const [showQr, setShowQr] = useState(false);

  const handleClose = () => {
    setShowQr(false);
  };
  return (
    <EditableItem targetValue={'lud06'} label='lnurl'>
      <ItemBase>
        {lud06 ? (
          <>
            <Emoji emoji={'⚡️'} />
            <span onClick={() => setShowQr(true)} className={'lnurl-link'}>
              tip
            </span>
            <Modal show={showQr} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Scan QR Code with lightning wallet</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <ItemBase>
                  <QRCode value={lud06} />
                </ItemBase>
              </Modal.Body>
            </Modal>
          </>
        ) : (
          <></>
        )}
      </ItemBase>
    </EditableItem>
  );
};

export default Lnurl;
