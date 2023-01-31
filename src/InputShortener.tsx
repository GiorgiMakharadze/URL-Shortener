import { useState } from "react";
import styles from "./App.module.scss";

interface InputShortenerProps {
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}
const InputShortener = ({
  setInputValue,
}: InputShortenerProps): JSX.Element => {
  const [value, setValue] = useState<string>("");

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setInputValue(value);
    setValue("");
  };

  return (
    <div className={styles.InputContainer}>
      <h1>
        URL <span>Shortener</span>
      </h1>
      <div>
        <input
          type="text"
          placeholder="Paste a link to shorten it"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={handleClick}>Shorten</button>
      </div>
    </div>
  );
};

export default InputShortener;
