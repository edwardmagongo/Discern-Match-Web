interface Props {
  size?: number;
  color?: string;
}

export function BrandMark({ size = 32, color = 'currentColor' }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="16" cy="16" r="15" stroke="#B8924A" strokeWidth="0.75" />
      <circle cx="16" cy="16" r="6" stroke="#C9A55C" strokeWidth="0.75" />
      <circle cx="16" cy="16" r="1.4" fill="#B8924A" />
    </svg>
  );
}
