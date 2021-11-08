import React, { ReactNode, CSSProperties } from "react";

import myStyles from "./Main.module.css";

type Main = {
  children?: ReactNode;
  styles?: string[];
};
export default function Main({ children, styles }: Main) {
  return (
    <main className={[myStyles.main, ...(styles ?? [])].join(" ")}>
      {children}
    </main>
  );
}
