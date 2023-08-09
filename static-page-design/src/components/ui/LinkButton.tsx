import Link from "next/link";

function LinkButton({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <Link
      href={href}
      className='text-white hover:text-black-200 text-base transition duration-150 ease-out hover:ease-in'>
      {children}
    </Link>
  );
}

export default LinkButton;
