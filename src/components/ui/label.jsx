import { cn } from "../../lib/utils";
import * as LabelPrimitive from "@radix-ui/react-label";
import React from "react";

const Label = React.forwardRef((props, ref) => {
  const { className, required, children, ...otherProps } = props;
  
  return (
    <LabelPrimitive.Root
      ref={ref}
      className={cn(
        "pb-1 text-lg font-medium text-orange-100 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className
      )}
      {...otherProps}
    >
      {children}
      {required && <span className="text-red-600 ml-1">*</span>}
    </LabelPrimitive.Root>
  );
});

Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
