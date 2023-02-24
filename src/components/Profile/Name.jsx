import { nip05 } from 'nostr-tools';
import { useState, useEffect } from 'react';

import ItemBase from '../ItemBase';
import { EditableItem } from './EditableItem';

export default ({ name, nip05Address, pubKey, isEdit }) => {
  const [verified, setVerified] = useState(false);
  const [domain, setDomain] = useState('');

  useEffect(() => {
    const nip05Verify = async () => {
      if (nip05Address) {
        try {
          const profile = await nip05.queryProfile(nip05Address || '');

          setVerified(profile.pubkey === pubKey);
        } catch {
          console.error('Unable to verify nip05');
          setVerified(false);
        }
      }
    };
    if (!isEdit) {
      nip05Verify();
    }
    const newDomain =
      nip05Address.split('@').length > 1 ? nip05Address.split('@')[1] : '';
    setDomain(newDomain);
  }, [nip05Address, isEdit]);

  return (
    <>
      <EditableItem targetValue={'name'} label='Name'>
        <ItemBase>
          <span className='name'>{name}</span>
        </ItemBase>
      </EditableItem>
      <EditableItem targetValue={'nip05'} label='Nip05'>
        <ItemBase>
          {verified ? (
            <a href={`https://${domain}`} className='nip05-link'>
              {verified.toString() && `   ✅ ${domain}`}
            </a>
          ) : (
            <></>
          )}
        </ItemBase>
      </EditableItem>
    </>
  );
};
