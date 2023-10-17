import React from "react";
import parse from "html-react-parser";
import { ISubstrings } from "screens/Main/HowToPlaySliderTypes";

interface Props {
  text: string;
  substrings: ISubstrings[];
}

const ChangingSubstringsStyles: React.FC<Props> = React.memo(({ text, substrings }) => {

  const changeSubstringsStyles = (text, substrings) => {
    let lastStrVersion = "";// if the string changes, will return this version
    let lastStrPart = "";// only to add string ending

    const searchSubstrings = (currentStr, subStr, subStyles) => {
      let cycleIndex = 0;// how many times the recursive function has run
      let fStr = "";// modified string

      // recursive function for deep searching
      const indexSearching = (currentStr, subStr) => {

        if (currentStr.includes(subStr)) {
          // adding prev-part of string
          fStr += currentStr.split(subStr)[0];

          // adding styles for substring
          fStr += `<span
            style="${subStyles}"
            >${subStr}</span>`;

          // cutting off the checked part
          const nextStrPart = currentStr.slice(currentStr.indexOf(subStr) + subStr.length);
          lastStrPart = nextStrPart;

          cycleIndex += 1;
          // recursive call
          indexSearching(nextStrPart, subStr);
        } else {
          // adding of the last part entirely, if no further line is found
          fStr += lastStrPart;
        }
      };

      // first call
      indexSearching(currentStr, subStr);

      // if the substring was found: lastStrVersion = fStr
      if (cycleIndex !== 0) lastStrVersion = fStr;
    };

    // checking for the presence of each substring in the list separately
    substrings.forEach((substring) => {
      const argStr = lastStrVersion ? lastStrVersion : text;
      searchSubstrings(argStr, substring.subText, substring.subStyles);
    });

    // returning of the changed string or incoming string
    return lastStrVersion ? lastStrVersion : text;
  };

  return (
    <span>
      {parse(
        changeSubstringsStyles(text, substrings)
      )}
    </span>
  );
});

export default ChangingSubstringsStyles;