import { useState, useEffect } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import axios from "axios";
import styles from "./App.module.scss";

interface LinkResultProps {
  inputValue: string;
}

const LinkResult = ({ inputValue }: LinkResultProps): JSX.Element => {
  console.log(inputValue);

  const [shortenLink, setShortenLink] = useState<string>("");
  const [copy, setCopy] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(true);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios(
        `https://api.shrtco.de/v2/shorten?url=${inputValue}`
      );
      setShortenLink(res.data.result.full_short_link);
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (inputValue.length) {
      fetchData();
    }
  }, [inputValue]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopy(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [copy]);

  if (loading) {
    return <p className={styles.noData}>Loading...</p>;
  }
  if (!error) {
    return <p className={styles.noData}>Somthing went wrong!</p>;
  }

  return (
    <>
      {shortenLink && (
        <div className={styles.result}>
          <p>{shortenLink}</p>
          <CopyToClipboard text={shortenLink} onCopy={() => setCopy(true)}>
            <button>Copy to clipboard</button>
          </CopyToClipboard>
        </div>
      )}
    </>
  );
};

export default LinkResult;
