export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus",
}
export interface BenefitsType {
  icon: JSX.Element;
  title: string;
  desc: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}
