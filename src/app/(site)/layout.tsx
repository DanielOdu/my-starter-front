import Footer from "@/app//components/Footer";
import Nav from "@/app/components/Nav";
import { NavBarHeightProvider } from "../context/dimensionContext";

const SiteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavBarHeightProvider>
        <Nav />
        <main className=" max-w-[1485px] w-full px-6 pt-12  ">{children}</main>
        <Footer />
      </NavBarHeightProvider>
    </>
  );
};

export default SiteLayout;
