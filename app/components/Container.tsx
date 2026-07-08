import clsx from "clsx";
import type { ComponentPropsWithoutRef } from "react";

type ContainerProps = ComponentPropsWithoutRef<"div">;

export function Container({
  className,
  ...props
}: ContainerProps) {
  return (
    <div
      className={clsx(
        "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
        className
      )}
      {...props}
    />
  );
}