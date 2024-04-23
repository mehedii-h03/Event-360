import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type TContainer = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className }: TContainer) => {
  return (
    <div className={cn("w-full max-w-[1290px] px-[10px] mx-auto", className)}>
      {children}
    </div>
  );
};

export default Container;
