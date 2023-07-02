import React from "react";
import { useTitle } from "react-use";

const Title: React.FC<{ onTitle: any; children: React.ReactNode }> = ({
  onTitle,
  children,
}) => {

  // useEffect(() => {
  //   const prevTitle = document.title;
  //   document.title = `Appmawa | ${onTitle}`;
  //   return () => {
  //     document.title = prevTitle;
  //   };
  // }, [onTitle]);

  // Using useTitle function of react-use
  useTitle(`Appmawa | ${onTitle}`);

  return <>{children}</>;
};

export default Title;
