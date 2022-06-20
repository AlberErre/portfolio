import Script from "next/script";
import React, { useEffect, useState } from "react";

type P5Window = {
  setup?: () => void;
  draw?: () => void;
};

export const Art = () => {
  const onLoad = () => {
    const P5W = window as unknown as P5Window;

    if (P5W && P5W.setup) {
      //NOTE: setTimeout forces to execute this call as the last element (once p5.js has been loaded on window)
      setTimeout(() => {
        P5W.setup!();
      }, 0);
    }
  };

  useEffect(() => {
    onLoad();
  }, []);

  return (
    <>
      <Script src="/p5/p5.min.js"></Script>
      <Script src="/p5/art.js"></Script>

      <div id="canvasHolder" style={{ height: "230px" }} />
    </>
  );
};
