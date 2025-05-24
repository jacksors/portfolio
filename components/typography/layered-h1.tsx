import {ReactNode} from "react";

const LayeredH1 = ({children}: { children: ReactNode }) => {
  return (
    <h1 className="text-6xl font-bold text-foreground-offset relative">
      {children}
      <span
        className="absolute -top-1 -left-0 text-6xl text-foreground"
      >
        {children}
      </span>
    </h1>
  );
}

export default LayeredH1;