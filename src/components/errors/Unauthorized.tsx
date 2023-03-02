import React from "react";
import Lottie from "lottie-react";

import UnauthorizedAnimation from "src/assets/animations/lottie/error401.json";

interface UnauthorizedProps {}

function Unauthorized(props: UnauthorizedProps) {
  return (
    <React.Fragment>
      <Lottie animationData={UnauthorizedAnimation} loop={true} />
    </React.Fragment>
  );
}

export default Unauthorized;
