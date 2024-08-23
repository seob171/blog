import React from "react";

function Heading({
  level,
  children,
  ...props
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
> & {
  level: 1 | 2 | 3 | 4 | 5 | 6;
}) {
  const tag = `h${level}`;
  return React.createElement(
    tag,
    props,
    <a
      className="flex gap-x-1 w-fit group hover:text-muted-foreground"
      href={`#${props.id}`}
    >
      {children}
      <span className="opacity-0 group-hover:opacity-100">#</span>
    </a>,
  );
}

export default Heading;
