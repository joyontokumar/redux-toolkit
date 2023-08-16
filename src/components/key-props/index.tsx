import React, { useState } from "react";

const KeyProps = () => {
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);
  const ListItem = ({ content, id }: any) => {
    return <li id={id}>{content}</li>;
  };
  const shuffleItems = () => {
    const shuffledItems = [...items];
    console.log("get sort", shuffledItems);
    shuffledItems.sort(() => Math.random() - 0.5);
    setItems(shuffledItems);
  };
  return (
    <div>
      {" "}
      <button onClick={shuffleItems}>Shuffle Items</button>
      <ul>
        {items.map((item, index) => (
          <ListItem key={index} id={index} content={item} />
        ))}
      </ul>
    </div>
  );
};

export default KeyProps;
