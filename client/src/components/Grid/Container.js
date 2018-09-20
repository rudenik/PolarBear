import React from "react";

export const Container = ({ customClass,children }) => {
  return (<div className={`container ${customClass?customClass:""}`}>
        { children }
    </div>)
}