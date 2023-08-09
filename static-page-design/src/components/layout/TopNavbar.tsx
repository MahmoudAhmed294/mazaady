import Image from "next/image";
import Container from "./Container";
import Dropdown from "../ui/Dropdown";
import ArrowDownColoredRounded from "../icons/ArrowDownColoredRounded";
import SearchInput from "../ui/SearchInput";

const TopNavbar = () => {
  return (
    <Container>
      <nav className='grid grid-cols-3 gap-4 align-middle py-3'>
        <div className='col-span-2'>
          <div className='grid grid-cols-4 gap-1 align-middle'>
            <div className='col-span-1'>
              <Dropdown
                options={[
                  { label: "اسم البائع", value: "name" },
                  { label: "مزاد عام", value: "name2" },
                  { label: "مزاد مباشر ", value: "name2" },
                ]}
                label='مزاد مباشر متعدد'
                icon={<ArrowDownColoredRounded />}
              />
            </div>
            <div className='col-span-3'>
              <SearchInput />
            </div>
          </div>
        </div>
        <div className='col-span-1 flex justify-end'>
          <Image
            src={require("@/assets/images/logo.png")}
            alt='logo'
            loading='lazy'
            width={109}
            height={34}
          />
        </div>
      </nav>
    </Container>
  );
};
export default TopNavbar;
