import Footer from "@/app//components/Footer";
import Nav from "@/app/components/Nav";

const SiteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Nav />
      <main className=" max-w-[1485px] w-full px-4 pt-12 bg-blue-500 ">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default SiteLayout;
