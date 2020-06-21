import React from "react";
import CTA from "../styled/CTA";
import { Accent, StyledTitle } from "../styled/Random";

const Home = () => {
  return (
    <div>
      <StyledTitle>Ready To Type ?</StyledTitle>
      <CTA to="/game">
        Click or type <Accent>'S'</Accent> To Start Playing
      </CTA>
    </div>
  );
};

export default Home;
