import { atom } from 'recoil';

const profileEditState = atom({
  key: 'profileEditState',
  default: false,
});

const profileDataState = atom({
  key: 'profileDataState',
  default: null
})

const queryParameters = new URLSearchParams(window.location.search);
const relays = queryParameters.get('relays');

let relayUrls;
if (relays) {
  relayUrls = relays.split(',');
} else {
  relayUrls = ['wss://relay.damus.io', 'wss://relay.snort.social'];
}

const relayUrlState = atom({
  key: 'relayUrlState',
  default: relayUrls
})

export { profileEditState, profileDataState, relayUrlState };
