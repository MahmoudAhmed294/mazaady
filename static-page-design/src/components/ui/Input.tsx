export default function Input({ className, ...rest }: any) {
  return <input className={`border border-gray-400 p-2 w-full ${className}`} {...rest} />;
}
