interface InputProps {
  placeholder: string;
  onChange: (event: any | string) => void;
  name: string;
  value:any
}

const Input: React.FC<InputProps> = ({ placeholder, onChange, name, value }) => (
  <input
    onChange={(e) => onChange({ ...value, [name]: e.target.value })}
    className='shadow appearance-none border rounded mt-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
    placeholder={placeholder}
  />
);

export default Input;