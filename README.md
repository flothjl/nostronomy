## 🫂 NOSTRONOMY 🤙

The link-in-bio website built on [nostr](https://github.com/nostr-protocol)


## Demo Site
This is still a Work in progress and buggy, but a site to test it out has been setup:
<br/>
Create/modify/update profile: https://nostree-87f2c.web.app/
<br/>
View a profile: https://nostree-87f2c.web.app/profile/:npub
<br/>

Notes:
* Right now a default list of relay connections is established. This can be overridden by a `relays` url argument that consists of a comma separated list of relays.
    * Example: `?relays=wss://relay.damus.io,wss://relay.snort.social`
    * dynamic relay management is being worked on

![Nostronomy](demo.png "Nostronomy")

![Manage](manage.png "Nostronomy")
