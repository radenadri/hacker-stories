import { memo } from "react";
import {
  StyledButtonSmall,
  StyledColumn,
  StyledItem
} from "./StyledComponents";
import { ReactComponent as Check } from "./check.svg";

type Story = {
  objectID: string;
  url: string;
  title: string;
  author: string;
  num_comments: string;
  points: number;
};

type Stories = Array<Story>;

type ListProps = {
  list: Stories;
  onRemoveItem: (item: Story) => void;
};

type ItemProps = {
  item: Story;
  onRemoveItem: (item: Story) => void;
};

const Item = ({ item, onRemoveItem }: ItemProps) => {
  const { url, title, author, num_comments, points } = item;

  return (
    <StyledItem>
      <StyledColumn width="40%">
        <a href={url}>{title}</a>
      </StyledColumn>
      <StyledColumn width="30%">{author}</StyledColumn>
      <StyledColumn width="10%">{num_comments}</StyledColumn>
      <StyledColumn width="10%">{points}</StyledColumn>
      <StyledColumn width="10%">
        <StyledButtonSmall type="button" onClick={() => onRemoveItem(item)}>
          <Check height="18px" width="18px" />
        </StyledButtonSmall>
      </StyledColumn>
    </StyledItem>
  );
};

const List = memo(({ list, onRemoveItem }: ListProps) => (
  <ul>
    {list.map((item) => (
      <Item key={item.objectID} item={item} onRemoveItem={onRemoveItem} />
    ))}
  </ul>
));

export default List;
