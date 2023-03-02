import React from "react";
import Lottie from "lottie-react";

import ForbiddenAnimation from "src/assets/animations/lottie/forbidden403.json";

interface ForbiddenProps {}

function Forbidden(props: ForbiddenProps) {
  return (
    <React.Fragment>
      <Lottie animationData={ForbiddenAnimation} loop={true} />
    </React.Fragment>
  );
}

export default Forbidden;
