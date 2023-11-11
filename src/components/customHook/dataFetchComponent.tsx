import React, { useState } from "react";
import useFetch from "./dataFetch";
import Card from "./card";

const FetchComponent = () => {
  const [changeValue, setChangeValue] = useState<number>(0);
  const { data, isLoading, error }: any = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );

  const increment = () => {
    setChangeValue((prev) => prev + 1);
  };

  return (
    <>
      <h3>Increment : {changeValue}</h3>
      <button className="primary mb-12.2" onClick={increment}>
        change value
      </button>
      <div className="grid grid-cols-4 gap-4">
        {data?.map((item: any) => (
          <Card key={item?.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default FetchComponent;
