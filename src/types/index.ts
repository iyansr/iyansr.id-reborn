export interface linkProps {
  href: string;
  label: string;
  matches: Function;
  indexes: {
    desktop: number;
    mobile: number;
  };
}
