import { EditableItem } from './EditableItem';
import ItemBase from '../ItemBase';

export default ({ data }) => {
  return (
    <EditableItem targetValue={'website'} label='Website'>
      {data ? <ItemBase>{data}</ItemBase> : <></>}
    </EditableItem>
  );
};
