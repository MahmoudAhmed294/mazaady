type LanguageButtonProps = {
  label: string;
  icon: React.ReactNode;
};

const LanguageButton = ({ label, icon }: LanguageButtonProps) => {
  return (
    <button className='text-white languageSelect flex items-end gap-1 relative px-6 py-1 rounded-full font-medium'>
      {label}
      {icon}
    </button>
  );
};

export default LanguageButton;
