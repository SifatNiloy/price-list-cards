import React from "react";

const Link = ({route}) => {
  return (
    <div className="mr-12 hover:bg-purple-600">
      <a href={route.path}>{route.name}</a>
    </div>
  );
};

export default Link;
