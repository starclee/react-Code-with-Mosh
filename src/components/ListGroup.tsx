import { useState } from "react";
import styled from "styled-components";

interface Props {
  items: string[];
  title: string;
  onSelectedItem: (item: string) => void;
}

interface ListItemProps {
  active: boolean;
}

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;
  background: ${(props) => (props.active ? "teal" : "none")};
`;

function ListGroup({ items, title, onSelectedItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{title} List</h1>
      {items.length === 0 && <p>No items found</p>}
      <List>
        {items.map((item, i) => {
          return (
            <ListItem
              active={i === selectedIndex}
              key={i}
              // style = {{backgroundColor: "skyblue"}}
              // className={
              //   selectedIndex === i
              //     ? "list-group-item active"
              //     : "list-group-item"
              // }
              onClick={() => {
                setSelectedIndex(i);
                onSelectedItem(item);
              }}
            >
              {item}
            </ListItem>
          );
        })}
      </List>
    </>
  );
}

export default ListGroup;
