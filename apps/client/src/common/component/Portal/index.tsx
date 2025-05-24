import { type PropsWithChildren, useEffect, useState } from "react";
import { createPortal } from "react-dom";

type PortalProps = PropsWithChildren<{
  id: string;
}>;

const Portal = ({ id, children }: PortalProps) => {
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    let root = document.getElementById(id);

    if (!root) {
      root = document.createElement("div");
      root.setAttribute("id", id);

      document.body.appendChild(root);
    }

    setContainer(root);
  }, [id]);

  return container ? createPortal(children, container) : null;
};

export default Portal;
