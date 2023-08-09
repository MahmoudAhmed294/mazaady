import Container from "./Container";
import Navbar from "./Navbar";
import TopNavbar from "./TopNavbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='bg-white '>
      <TopNavbar />
      <Navbar />
      <Container>{children}</Container>
    </div>
  );
};

export default Layout;
