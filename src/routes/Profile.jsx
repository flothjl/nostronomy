import { useParams } from 'react-router-dom';
import { nip19 } from 'nostr-tools';
import Profile from '../components/Profile';

const ProfilePage = () => {
  const { npub } = useParams();
  let pubKey;
  try {
    pubKey = nip19.decode(npub).data;
  } catch {
    console.error('unable to decode pubKey');
  }
  return <Profile isManage={false} isEditable={false} pubKey={pubKey}/>
}

export default ProfilePage;
