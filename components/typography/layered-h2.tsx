import {ReactNode} from "react";

const LayeredH1 = ({children}: { children: ReactNode }) => {
  return (
    <h2 className="text-4xl font-bold text-foreground-offset relative">
      {children}
      <span
        className="absolute -top-1 -left-0 text-6xl text-foreground"
      >
        {children}
      </span>
    </h2>
  );
}

export default LayeredH1;