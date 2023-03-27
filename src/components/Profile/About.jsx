import {EditableItem} from './EditableProfileItem';
import ItemBase from '../ItemBase';
const About = ({ data }) => {
  return (
    <EditableItem targetValue={'about'} label='About'>
      {data ? (
        <ItemBase>
          <div className='about'>
            <span className='about-emoji'>{'📖 '}</span>
            {data}
          </div>
        </ItemBase>
      ) : (
        <></>
      )}
    </EditableItem>
  );
};

export default About;
