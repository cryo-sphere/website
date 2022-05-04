import type React from "react";

export type ReactFC<P = Record<string, unknown>> = React.FC<P & { children?: React.ReactNode }>;
