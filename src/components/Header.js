import PropType from "prop-types";
import Button from "./Button";
import React from "react";

export const Header = ({ title, onShow, showAddTask }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAddTask ? "black" : "green"}
        text={showAddTask ? "Close" : "Add"}
        onClick={onShow}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "No title given",
};

Header.propType = {
  title: PropType.String,
};
