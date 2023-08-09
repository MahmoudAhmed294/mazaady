type TextProps = {
  color?: string;
  size?: string;
  weight?: string;
};

const Text = ({
  children,
  color = "gray",
  size = "text-base",
  weight = "normal",
}: TextProps & { children: React.ReactNode }) => {
  return (
    <p
      className={`
        ${color}  
        ${size}
        ${weight}
      `}>
      {children}
    </p>
  );
};
export default Text;
