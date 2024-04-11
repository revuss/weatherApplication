import React from "react";

const HeaderSection: React.FC<{ title: string }> = ({ title }) => {
  return (
    <>
      <header>
        <h1>{title}</h1>
      </header>
    </>
  );
};

export default HeaderSection;
