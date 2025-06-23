import { useOutsideClick } from "@/common/hook/useOutsideClick";
import { handleA11yClick } from "@/common/util/dom";
import clsx from "clsx";
import { useEffect, useRef } from "react";
import { contextMenu, contextMenuItem, selectedStyle } from "./index.css";

type ContextMenuProps = {
  x: number;
  y: number;
  selectedTheme: string;
  onThemeChange: (theme: string) => void;
  onClose: () => void;
};

const themeList = [
  "a11y-dark",
  "atom-dark",
  "base16-ateliersulphurpool.light",
  "cb",
  "coldark-cold",
  "coldark-dark",
  "coy-without-shadows",
  "coy",
  "darcula",
  "dark",
  "dracula",
  "duotone-dark",
  "duotone-earth",
  "duotone-forest",
  "duotone-light",
  "duotone-sea",
  "duotone-space",
  "funky",
  "ghcolors",
  "gruvbox-dark",
  "gruvbox-light",
  "holi-theme",
  "hopscotch",
  "lucario",
  "material-dark",
  "material-light",
  "material-oceanic",
  "night-owl",
  "nord",
  "okaidia",
  "one-dark",
  "one-light",
  "pojoaque",
  "shades-of-purple",
  "solarized-dark-atom",
  "solarizedlight",
  "synthwave84",
  "tomorrow",
  "twilight",
  "vs",
  "vsc-dark-plus",
  "xonokai",
  "z-touch",
];

const ContextMenu = ({
  x,
  y,
  selectedTheme,
  onThemeChange,
  onClose,
}: ContextMenuProps) => {
  const ref = useOutsideClick(onClose);
  const selectedRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    selectedRef.current?.scrollIntoView();
  }, [selectedTheme]);

  return (
    <div
      ref={ref}
      className={contextMenu}
      style={{ top: `${y}px`, left: `${x}px` }}
      onClick={onClose}
      onKeyDown={handleA11yClick(onClose)}
    >
      {themeList.map((theme) => {
        const selected = selectedTheme === theme;
        return (
          <button
            key={theme}
            ref={selected ? selectedRef : null}
            onClick={() => onThemeChange(theme)}
            className={clsx(contextMenuItem, selected && selectedStyle)}
          >
            {theme}
          </button>
        );
      })}
    </div>
  );
};

export default ContextMenu;
