interface IconProps {
    w?: string;
    h?: string;
    color?: string;
}

export const MenuIcon = ({w, h, color}: IconProps) => {
    return (
        <svg width={w} height={h} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 12H20M4 8H20M4 16H12" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}