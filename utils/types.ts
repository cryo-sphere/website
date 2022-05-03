import type React from "react";

export type ReactFC<P> = React.FC<P & { children?: React.ReactNode }>;
