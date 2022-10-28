import React, { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';
 
export const TextToSpeech: React.FC = () => {
  const [value, setValue] = useState('');
  const { speak } = useSpeechSynthesis();
 
  return (
    <div>
      <textarea
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button onClick={() => speak({ text: value })}>Speak</button>
    </div>
  );
}