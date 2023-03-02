import React from "react";
import Lottie from "lottie-react";

import NoResultFoundAnimation from "src/assets/animations/lottie/no_results_found.json";

interface NoResultFoundProps {}

function NoResultFound(props: NoResultFoundProps) {
  return (
    <React.Fragment>
      <Lottie animationData={NoResultFoundAnimation} loop={true} />
    </React.Fragment>
  );
}

export default NoResultFound;
