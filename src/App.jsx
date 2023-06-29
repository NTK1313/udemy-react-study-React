import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  console.log("START");
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUP = () => {
    setNum(num + 1);
  };
  const onClickTrueFalse = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    num % 3 === 0
      ? faceShowFlag || setFaceShowFlag(true)
      : faceShowFlag && setFaceShowFlag(false);
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>Hello World</h1>
      <ColorfulMessage color="blue" fontSize="25px">
        Hello Men
      </ColorfulMessage>
      <ColorfulMessage color="green" fontSize="15px">
        Hello Lady
      </ColorfulMessage>
      <button onClick={onClickCountUP}>カウントアップ</button>
      <br />
      <br />
      <button onClick={onClickTrueFalse}>ON/OFF</button>
      <p>{num}</p>
      {faceShowFlag && <p>(^_-)-☆</p>}
    </>
  );
};

export default App;
