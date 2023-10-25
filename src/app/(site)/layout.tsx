import Footer, { MobileSocialFooter } from "@/app//components/Footer";
import Nav, { MobileNav } from "@/app/components/Nav";
import { NavBarHeightProvider } from "../context/dimensionContext";

const SiteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavBarHeightProvider>
        <Nav />
        <MobileNav />
        <div className=" flex flex-col w-full min-h-screen relative">
          <main className=" max-w-[1485px] w-full px-6 pt-12  flex-grow    ">
            {/* min-h-[100vh] h-fit  */}
            {children}
          </main>
          <MobileSocialFooter />
          <Footer />
        </div>
      </NavBarHeightProvider>
    </>
  );
};

export default SiteLayout;
