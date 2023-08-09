import Container from "./Container";
import LinkList from "./LinkList";
import IconList from "./IconList";
import ArrowDownRounded from "../icons/ArrowDownRounded";
import LanguageButton from "../ui/LanguageButton";

const Navbar = () => {
  return (
    <nav className='bg-gradient-to-r  from-pink-100 to-pink-200 h-16 py-2 '>
      <Container className='grid grid-cols-2 h-full items-center '>
        <div className='col-span-1  '>
          <LinkList />
        </div>
        <div className='col-span-1 flex justify-end gap-6'>
          <IconList />
          <LanguageButton label='عربية' icon={<ArrowDownRounded />} />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
