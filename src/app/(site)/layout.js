import Header from "@/components/Header"; 
import Footer from "@/components/Footer";

export default function SiteLayout({ children }) {
  return (
    <div className="max-w-[1024px] h-full w-full mx-auto">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
