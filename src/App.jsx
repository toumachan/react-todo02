import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [imcompleteTodos, setImcompleteTodos] = useState([
    "ああああああああああああ",
    "いいいいいいいいい"
  ]);
  const [completeTodos, setCompleteTodos] = useState(["ううううううううう"]);

  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <div class="inner_box">
          {imcompleteTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <p>{todo}</p>
                <button>完了</button>
                <button>削除</button>
              </div>
            );
          })}
        </div>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <div class="inner_box">
          {completeTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <p>{todo}</p>
                <button>戻す</button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
