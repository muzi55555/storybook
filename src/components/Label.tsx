interface ILabelProps {
  children: React.ReactNode;
  htmlFor: string;
}
export default function Label({ children, htmlFor }: ILabelProps) {
  return <label htmlFor={htmlFor}>{children}</label>;
}
