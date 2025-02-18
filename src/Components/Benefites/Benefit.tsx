import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const childVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};
interface Props {
  icon: JSX.Element;
  title: string;
  desc: string;
  setSelectedPage: (value: SelectedPage) => void;
}

const Benefit = ({ setSelectedPage, icon, title, desc }: Props) => {
  return (
    <motion.div
      variants={childVariants}
      className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center"
    >
      <div className="mb-4 flex justify-center">
        <div className="bg-primary-100 rounded-full border-2 border-gray-100 p-4">
          {icon}
        </div>
      </div>
      <h4 className="font-bold">{title}</h4>
      <p className="my-3">{desc}</p>
      <AnchorLink
        className="text-primary-500 text-sm font-bold"
        href={SelectedPage.ContactUs}
        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        <p>Learn More</p>
      </AnchorLink>
    </motion.div>
  );
};

export default Benefit;
