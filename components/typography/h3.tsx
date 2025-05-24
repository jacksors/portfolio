import {ReactNode} from "react";

const H3 = ({children, className}: { children: ReactNode, className?: string }) => {
  return (
    <h2 className={`text-foreground text-2xl font-semibold ${className || ""}`}>
      {children}
    </h2>
  );
}

export default H3;