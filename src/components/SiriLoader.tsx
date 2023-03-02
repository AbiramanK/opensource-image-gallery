import React from "react";
import Lottie from "lottie-react";

import SiriLoadingAnimation from "src/assets/animations/lottie/siri_loading.json";

interface SiriLoaderProps {}

function SiriLoader(props: SiriLoaderProps) {
  return (
    <React.Fragment>
      <Lottie animationData={SiriLoadingAnimation} loop={true} />
    </React.Fragment>
  );
}

export default SiriLoader;
