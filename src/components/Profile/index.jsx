import { useNostr, useProfile, dateToUnix } from 'nostr-react';
import { nip19 } from 'nostr-tools';
import { useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';

import ProfilePic from './ProfilePic';
import Name from './Name';
import About from './About';
import Website from './Website';
import Links from './Links';
import Lnurl from './Lnurl';
import { profileEditState, profileDataState } from '../../recoilState';
import Loader from '../Loader';

export default ({ isManage, isEditable, pubKey: _pubKey = null }) => {
  let pubKey = _pubKey;
  if (!pubKey) {
    const queryParameters = new URLSearchParams(window.location.search);
    const npub = queryParameters.get('npub');
    pubKey = nip19.decode(npub).data;
  }

  if (!pubKey) {
    return <></>;
  }
  const nostr = useNostr();
  const [profileEdit, setProfileEdit] = useRecoilState(profileEditState);
  const [profileData, setProfileData] = useRecoilState(profileDataState);
  const [isLoading, setIsLoading] = useState(false);
  let profileUpdateCount = useRef(0);
  const { data: userData, isLoading: isProfileLoading } = useProfile({
    pubkey: pubKey,
  });
  useEffect(() => {
    setProfileEdit(isEditable);
  }, []);

  useEffect(() => {
    if (isProfileLoading) {
      setIsLoading(true);
    }
    if (profileUpdateCount.current < 10) {
      setProfileData(userData || {});
      profileUpdateCount.current++;
    }
    if (!isProfileLoading) {
      // After we are told profile is loading, stop updating state
      profileUpdateCount.current = 10;
      setIsLoading(false);
    }
  }, [isProfileLoading]);

  const handleSave = async () => {
    setIsLoading(true);
    let eventToPublish = {
      content: JSON.stringify({
        ...profileData,
        links: profileData.links.filter(
          (link) => link.length === 2 && link[0] && link[1]
        ),
      }),
      kind: 0,
      tags: [],
      created_at: dateToUnix(),
      pubkey: pubKey,
    };

    try {
      eventToPublish = await window.nostr.signEvent(eventToPublish);
      nostr.publish(eventToPublish);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <>
        <Loader />
      </>
    );
  }
  return (
    <>
      {profileData ? (
        <>
          <ProfilePic picture={profileData.picture || ''} />
          <Name
            name={profileData.name || ''}
            nip05Address={profileData.nip05 || ''}
            pubKey={pubKey}
            isEdit={profileEdit}
          />
          <About data={profileData.about || ''} />
          <Website data={profileData.website || ''} />
          <Lnurl lud06={profileData.lud06 || ''} />
          <Links links={profileData.links || []} />
          {isManage ? (
            <>
              <div
                className='row justify-content-end'
                style={{ marginTop: '40px' }}
              >
                <div className='col d-grid'>
                  <button
                    className='btn btn-light'
                    onClick={() => setProfileEdit(!profileEdit)}
                  >
                    {!profileEdit ? 'Exit Preview' : 'Preview'}
                  </button>
                </div>

                <div className='col d-grid'>
                  <button className='btn btn-primary' onClick={handleSave}>
                    Submit
                  </button>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}
    </>
  );
};
