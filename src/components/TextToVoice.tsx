import React from "react";
import { useState } from "react";
import { getSpeech } from "voice-rss-client/dist/browser";
import dataHero from "../dataHero.json"

export const TextToVoice: React.FC = () => {

  const paragraph: string = dataHero.paragraph1;
  const paragraph2: string = dataHero.paragraph2;  


  const [myAudioElement, setMyAudioElement] = useState(String);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {

    const downloadedSpeech = getSpeech({
      apiKey: "1dc335953c2b420db1f93a74eab42147",
      language: "en-us",
      text:  paragraph + paragraph2,
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
          <audio autoPlay src={myAudioElement}></audio>
          <button onClick={handleClick} className="waves-effect waves-light btn-small z-depth-0"> <i className="material-icons left">volume_up</i>click to listen to the text below</button>
        </div>
      </div>
    </>
  );
};

export default TextToVoice;

// The code above is a combination of use these two tools:
// text to voice API 
// https://www.voicerss.org/api/
// and npm package by:
// https://github.com/petarvujovic98/voice-rss-client
