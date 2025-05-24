import {ReactNode} from "react";

const H1 = ({children}: { children: ReactNode }) => {
  return (
    <h1 className="text-7xl font-bold text-foreground-offset relative">
      {children}
      <span
        className="absolute -top-1.5 -left-0 text-7xl text-foreground"
      >
        {children}
      </span>
    </h1>
  );
}

export default H1;