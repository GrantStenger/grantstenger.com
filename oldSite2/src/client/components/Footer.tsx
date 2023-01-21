import React from "react";

export const Footer = () => {
  return (
    <footer className={"justify-center items-center text-white text-lg font-eb-garamond"}>
      &copy; {new Date().getFullYear()} - {" "}
      <a href={"https://twitter.com/GrantStenger"}>Principia Labs</a>
      {/* Principia Labs - {" "}
      <a href={"https://github.com/Principia-Labs-LLC"}>Github</a> -
      <a className={"p-1"} href={"https://twitter.com/GrantStenger"}>Twitter</a> */}
    </footer>
  );
};
