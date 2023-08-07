import { ReactNode } from "react";

const PaddingContainer = ({ children }: { children: ReactNode }) => {
  return <div className="w-full mx-auto max-w-7xl px-8">{children}</div>;
};

export default PaddingContainer;
