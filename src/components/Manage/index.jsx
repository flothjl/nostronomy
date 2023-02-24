import { Button } from 'react-bootstrap';
import { useState } from 'react';
import Profile from '../Profile';
import ItemBase from '../ItemBase';

import './index.scss';

export default () => {
  const [pubKey, setPubKey] = useState();
  const [unsupported, setUnsupported] = useState(false);
  const [nip07Loading, setNip07Loading] = useState(false);

  const handleLogin = async () => {
    setNip07Loading(true);
    try {
      const _pubKey = await window.nostr.getPublicKey();
      setPubKey(_pubKey);
    } catch {
      console.error(
        'No nostr object in the window. Install browser extension that supports nip07'
      );
      setUnsupported(true);
    } finally {
      setNip07Loading(false);
    }
  };

  if (unsupported) {
    return (
      <ItemBase>
        <p>Nip07-compatible browser extension required to login</p>
        <p>Recommended:</p>
        <p>Alby</p>
        <p>Nos2x</p>
      </ItemBase>
    );
  }
  return (
    <>
      {pubKey ? (
        <Profile isManage={true} isEditable={true} pubKey={pubKey}></Profile>
      ) : (
        <ItemBase>
          <Button
            variant='primary'
            disabled={nip07Loading}
            onClick={!nip07Loading ? handleLogin : null}
          >
            Connect via nip07 browser extension
          </Button>
        </ItemBase>
      )}
    </>
  );
};
