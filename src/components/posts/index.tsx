import React, { useReducer, useEffect } from "react";
import { postReducer, initialState } from "./postReducer";
const Posts = () => {
  const [postInfo, dispatch] = useReducer(postReducer, initialState);
  console.log("get data", postInfo);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    dispatch({ type: "FETCH_INITAL" });
    fetch("https://jsonplaceholder.typicode.com/todos", { signal })
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      })
      .catch((err) => {
        dispatch({ type: "FETCH_ERROR" });
      });
    return () => {
      controller.abort();
    };
  }, []);
  return (
    <div className="grid grid-cols-1 gap-4">
      <h4>this is post page</h4>
      <pre>
        <code>{JSON.stringify(postInfo.post[0], null, 4)}</code>
      </pre>
      <h5>Render multiple data {postInfo.count}</h5>
      <button
        className="primary-btn"
        onClick={() => {
          console.log("get data call");
          dispatch({ type: "COUNT_INCREMENT" });
        }}
      >
        click me
      </button>
    </div>
  );
};

export default Posts;
