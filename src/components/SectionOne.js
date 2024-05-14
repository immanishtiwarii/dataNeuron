import React, { useState } from "react";
import { Resizable } from "react-resizable";

import ComponentOne from "./ComponentOne";
import ComponentsTwo from "./ComponentsTwo";
import ComponentsThree from "./ComponentsThree";

const SectionOne = () => {
  return (
    <>
      <div className="layout">
        <ComponentOne />

        <ComponentsTwo />
      </div>
      <div className="layout-components-three">
        <ComponentsThree />
      </div>
    </>
  );
};

export default SectionOne;
