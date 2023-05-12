import Emoji from './Emoji';
import { validateLink } from '../../util';
import { EditableLinks } from './EditableProfileItem';

const Link = ({ link }) => {
  if(link[0]){
    return (
      <div className='row text-center'>
        <div className='col-12'>
          <Emoji emoji={'🔗'} />
          <a href={link[0]} rel="noreferrer" target='_blank'>
            {link[1] || link[0]}
          </a>
        </div>
      </div>
    );
  }

};

const Links = ({ links }) => {
  const linkElements = links?.map((link, idx) => {
    if (validateLink(link)) {
      return <Link key={idx} link={link} />;
    } else {
      return <></>
    }
  });
  return <EditableLinks items={links}>{linkElements}</EditableLinks>;
};

export default Links;
