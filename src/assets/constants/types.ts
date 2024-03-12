import { ComponentType, SVGProps } from "react";

export type IExperience = {
  title: string;
  company_name: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;

  iconBg: string;
  date: string;
  points: string[];
  tools: string[];
}
export type TCard = {
  id: string;
  title: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export type IPortCard = {
  id: string;
  title: string;
  gif: string;
  description: string;
  git: string;
  demo?: string;
};

export type IContactCard = {
  icon: {
    icon: ComponentType<SVGProps<SVGSVGElement>>;
    title: string
  },
  button: string,
  link: string,
  title?: string,
  icon2?: ComponentType<SVGProps<SVGSVGElement>>;
}