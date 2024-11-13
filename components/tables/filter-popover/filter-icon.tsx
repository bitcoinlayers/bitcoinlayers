interface Props {
    filters: string[];
}

export default function FilterIcon({ filters }: Props) {
    return (
        <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M11.4369 0H0.563154C0.0635131 0 -0.188604 0.606567 0.165419 0.960589L4.5 5.29517V10.1250C4.5 10.3085 4.59492 10.4788 4.75391 10.5826L6.50391 11.7076C6.81885 11.9225 7.25 11.6921 7.25 11.3125V5.29517L11.5846 0.960589C11.9386 0.606567 11.6865 0 11.4369 0Z"
                fill={filters.length > 0 ? "#FE4F18" : "#C9D0D8"}
            />
        </svg>
    );
}
