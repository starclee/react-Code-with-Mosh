import { useState } from "react";

interface Props {
  items: string[];
  title: string;
  onSelectedItem: (item: string) => void;
}

function ListGroup({ items, title, onSelectedItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{title} List</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, i) => {
          return (
            <li
              key={i}
              className={
                selectedIndex === i
                  ? "list-group-item active"
                  : "list-group-item"
              }
              onClick={() => {
                setSelectedIndex(i);
                onSelectedItem(item);
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ListGroup;
