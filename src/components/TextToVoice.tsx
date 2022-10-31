import React from "react";
import { useState } from "react";
import { getSpeech } from "voice-rss-client/dist/browser";

export const TextToVoice: React.FC = () => {

  const [myAudioElement, setMyAudioElement] = useState({});

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {

    const downloadedSpeech = getSpeech({
      apiKey: "1dc335953c2b420db1f93a74eab42147",
      language: "en-us",
      text: "the voice is working",
    });

    downloadedSpeech.then((value) => {
      const downloadedAudioElement = value.replace("data:", "data:audio/wav");
      setMyAudioElement(downloadedAudioElement);
    });
  };

  return (
    <>
      <div>
        <div>
          <audio controls src={myAudioElement}></audio>
          <button onClick={handleClick}>Click to read</button>
        </div>
      </div>
    </>
  );
};

export default TextToVoice;

// The code above is a combination of these two:
// https://www.voicerss.org/api/
// and
// https://github.com/petarvujovic98/voice-rss-client
