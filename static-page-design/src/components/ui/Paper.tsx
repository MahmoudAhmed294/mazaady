type PaperProps = {
  children: React.ReactNode;
  variant?: "plain" | "outlined";
};

export default function Paper({ children, variant = "plain" }: PaperProps) {
  return (
    <div
      className={`drop-shadow-md rounded-md p-4 ${
        variant === "plain" ? "bg-white" : "border border-gray-200 bg-white"
      }`}>
      {children}
    </div>
  );
}
