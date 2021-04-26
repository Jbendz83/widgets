import React, { useState, useEffect } from "react";
import axios from "axios";

const Convert = props => {
  const [lang, setLang] = useState("");
  const [debouncedLang, setDebouncedLang] = useState(props.text);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedLang(props.text);
    }, 2000);

    return () => {
      clearTimeout(timerId);
    };
  }, [props.text]);

  useEffect(() => {
    const translate = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debouncedLang,
            target: props.language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );
      setLang(data.data.translations[0].translatedText);
    };
    if (debouncedLang) {
      translate();
    }
  }, [debouncedLang, props.language]);

  return (
    <div>
      <h1 className="ui header">{lang}</h1>
    </div>
  );
};

export default Convert;
