import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
function createPortalWrapper() {
  const element = document.createElement("div");
  element.id = "portal-wrapper";
  return element;
}
const portalWrapperElm = createPortalWrapper();
const Portal = ({
  containerClassName = "",
  bodyClassName = "",
  containerStyle = {},
  bodyStyle = {},
  onClose = () => {},
  overlay = true,
  children,
}) => {
  useEffect(() => {
    document.body.appendChild(portalWrapperElm);
  }, []);
  const renderContent = (
    // <div
    //   className={`fixed inset-0 z-500 ${
    //     visible ? "" : "opacity-0 invisible"
    //   } ${containerClassName}`}
    //   style={containerStyle}
    // >
    //   <div
    //     onClick={onClose}
    //     className="absolute inset-0 bg-black bg-opacity-50 overlay"
    //   ></div>
    //   <div className={`relative z-10 ${bodyClassName}`} style={bodyStyle}>
    //     {children}
    //   </div>
    // </div>
    <div className={containerClassName} style={containerStyle}>
      {overlay && (
        <div
          className="absolute inset-0 bg-black overlay bg-opacity-20"
          onClick={onClose}
        ></div>
      )}
      <div className={bodyClassName} style={bodyStyle}>
        {children}
      </div>
    </div>
  );
  return createPortal(renderContent, portalWrapperElm);
};
Portal.propTypes = {
  containerClassName: PropTypes.string,
  bodyClassName: PropTypes.string,
  containerStyle: PropTypes.object,
  bodyStyle: PropTypes.object,
  onClose: PropTypes.func,
  visible: PropTypes.bool.isRequired,
  children: PropTypes.node,
  overlay: PropTypes.bool,
};

export default Portal;
