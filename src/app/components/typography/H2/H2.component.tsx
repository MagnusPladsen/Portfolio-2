import { H2Props } from "./H2.types";

function H2({ children, className = "", ...otherProps }: H2Props) {
  return (
    <h2
      {...otherProps}
      className={`${className} font-bold rtl:text-right text-gray-900`}
    >
      {children}
    </h2>
  );
}

export default H2;
