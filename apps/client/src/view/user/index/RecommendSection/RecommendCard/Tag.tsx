import { type ReactNode } from 'react';
import { tagStyle, tagWrapper } from "./index.css";

type TagType = {
    id: string;
    color: "blue" | "mint" | "yellow";
    children: ReactNode;
};

const Tag = ({ id, color, children }: TagType) => {
    return (
        <div className={tagWrapper({ color })}>
            <span id={id} className={tagStyle({ color })}>
                {children}
            </span>
        </div>
    );
};

export default Tag;
