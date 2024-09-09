interface IErrorMessageProps {
  children: React.ReactNode;
}
export default function ErrorMessage({ children }: IErrorMessageProps) {
  return <div className='text-red-600'>{children}</div>;
}
