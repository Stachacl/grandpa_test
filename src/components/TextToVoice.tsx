import React from "react";
import { getSpeech } from "voice-rss-client/dist/browser";

export const TextToVoice: React.FC = () => {
  getSpeech({
    apiKey: "1dc335953c2b420db1f93a74eab42147",
    language: "en-us",
    text: "foo You can import the library foo",
  });

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    getSpeech;
  };

  return (
    <div>
      <div>
        <button onClick={handleClick}>Click to read</button>
      </div>
    </div>
  );
};

export default TextToVoice;


// The code above is a combination of these two:
// https://www.voicerss.org/api/
// and 
// https://github.com/petarvujovic98/voice-rss-client