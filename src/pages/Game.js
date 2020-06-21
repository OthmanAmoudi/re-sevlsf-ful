import React, { useState, useEffect } from "react";
import {
  StyledGame,
  StyledScore,
  StyledTimer,
  StyledCharacter
} from "../styled/Game";

import { Strong, Accent } from "../styled/Random";

const Game = () => {
  const [score, setScore] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScore(prev => prev + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [score]);

  return (
    <StyledGame>
      <StyledScore>
        Score: <Strong>{score}</Strong>
      </StyledScore>
      <StyledCharacter>
        <Accent>A</Accent>
      </StyledCharacter>
      <StyledTimer>
        Time: <Strong>00:00</Strong>
      </StyledTimer>
    </StyledGame>
  );
};

export default Game;
