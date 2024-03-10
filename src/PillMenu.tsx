import { CSSProperties, PropsWithChildren, useState, useRef } from "react";
import { item, menu, list, indicator } from "./style.css";
import React from "react";

function PillMenuItem({
  children,
  onMouseEnter,
  onMouseLeave,
}: PropsWithChildren<{
  onMouseEnter?: React.MouseEventHandler<HTMLLIElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLLIElement>;
}>) {
  return (
    <li
      className={item}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </li>
  );
}

function PillMenu({ children }: PropsWithChildren<unknown>) {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [indicatorStyles, setIndicatorStyles] = useState<
    CSSProperties | undefined
  >(undefined);

  const handleMouseEnter: React.MouseEventHandler<HTMLUListElement> = (e) => {
    if (e.target && menuRef && menuRef.current) {
      const rect = (e.target as HTMLElement).getBoundingClientRect();
      const menuRect = menuRef.current.getBoundingClientRect();
      const offsetX = rect.x - menuRect.x;
      let styles: CSSProperties = {
        width: rect.width,
        height: rect.height,
        opacity: 1,
        transform: `translateX(${offsetX}px)`,
      };
      if (!indicatorStyles) {
        styles = { ...styles, transitionDuration: "0s" };
      }
      setIndicatorStyles(styles);
    }
  };

  const handleMouseLeave = () => {
    setIndicatorStyles(undefined);
  };

  return (
    <div className={menu} ref={menuRef}>
      <div className={indicator} style={indicatorStyles} />
      <ul className={list}>
        {React.Children.toArray(children).map((c) =>
          React.cloneElement(c as any, {
            onMouseEnter: handleMouseEnter,
            onMouseLeave: handleMouseLeave,
          })
        )}
      </ul>
    </div>
  );
}

export { PillMenu, PillMenuItem };
