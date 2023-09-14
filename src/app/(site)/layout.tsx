import Footer from "@/app//components/Footer";
import Nav from "@/app/components/Nav";

const SiteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className=" bg-blue-500">
      <main className=" ">
        <Nav />
        {children}
        <Footer />
      </main>
    </main>
  );
};

export default SiteLayout;
