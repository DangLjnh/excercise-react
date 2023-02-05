import React, { Fragment } from "react";
import { useAccordion } from "./accordion-context";
// Specialized component
const AccordionContent = ({ children }) => {
  const { show } = useAccordion();
  return (
    <Fragment>
      {show && (
        <div className="p-4 mt-2 border border-gray-200 rounded-lg content">
          {children}
        </div>
      )}
    </Fragment>
  );
};

export default AccordionContent;
