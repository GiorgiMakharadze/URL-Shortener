import { useState } from "react";
import BackgroundAnimate from "./BackgroundAnimate";
import InputShortener from "./InputShortener";
import LinkResult from "./LinkResult";
import styles from "./App.module.scss";

function App(): JSX.Element {
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <div className={styles.container}>
      <InputShortener setInputValue={setInputValue} />
      <BackgroundAnimate />
      <LinkResult inputValue={inputValue} />
    </div>
  );
}

export default App;
