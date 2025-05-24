import {ReactNode} from "react";

const H2 = ({children}: { children: ReactNode }) => {
  return (
    <h2 className="text-4xl font-bold text-foreground">
      {children}

    </h2>
  );
}

export default H2;