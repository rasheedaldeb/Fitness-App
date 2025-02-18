import NavBar from "@/Components/NavBar/NavBar";
import Home from "@/Components/Home/Home";
import { useState } from "react";
import { SelectedPage } from "@/shared/types";
import Benefites from "@/Components/Benefites/Benefits";
import OurClasses from "@/Components/OurClasses/OurClasses";
import ContactUs from "@/Components/ContactUs/ContactUs";
import Footer from "@/Components/Footer/Footer";
function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home,
  );
  const [isScroll, setIsScroll] = useState<boolean>(false);
  const scroll = () => {
    if (window.scrollY >= 45) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
      setSelectedPage(SelectedPage.Home);
    }
  };
  window.addEventListener("scroll", scroll);
  return (
    <div className="app bg-gray-20">
      <NavBar
        isScroll={isScroll}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Benefites setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  );
}

export default App;
