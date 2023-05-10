import React, { useEffect } from "react";

const Title: React.FC<{ onTitle: any; children: React.ReactNode }> = ({
  onTitle,
  children,
}) => {
  useEffect(() => {
    document.title = `Appmawa | ${onTitle}`;
  }, [onTitle]);

  return <>{children}</>;
};

export default Title;
