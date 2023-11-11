import React from "react";
const Card = ({ item }: any) => {
  console.log("re render data");
  return (
    <div className="single-content p-5 rounded shadow-sm bg-[#ddd]">
      <span>{item?.id}</span>
      <h4>{item?.title}</h4>
    </div>
  );
};

export default React.memo(Card);
