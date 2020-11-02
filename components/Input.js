import '../styles/main.css';

const Input = ({name}) => {
  return (
    <div className="flex flex-col p-2">
      <label htmlFor="">{name}</label>
      <input className="p-2 h-10  w-full bg-input box-border bg-input border-color rounded" type="text"/>
    </div>
  );
}

export default Input;
