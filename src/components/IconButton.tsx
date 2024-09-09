interface IIconButtonProps {
  iconPath: string;
  alt: string;
  width: number;
  height: number;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
export default function IconButton({ iconPath, onClick, alt, width, height }: IIconButtonProps) {
  return (
    <button onClick={onClick}>
      <img src={iconPath} alt={alt} width={width} height={height} />
    </button>
  );
}
