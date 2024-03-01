import Input from "./Input";

export default function InputProjectRegister(props: {
  type?: string;
  class?: string;
  placeholder?: string;
  onChange?: (e: any) => void;
  onBlur?: (e: any) => void;
  value?: any;
  disabled?: boolean;
  name?: string;
  initialValue?: string;
  autoFocus?: any;
}) {
  return (
    <>
<<<<<<< HEAD
      <p style={{ marginBottom: '4px', width: '100%'}}>{props.name}</p>
      <input 
        style={{ 
          height: '0.1px', 
          borderRadius: '4px', 
          border: '1px solid #CDE1FF', 
          width: '80%', 
          filter: 'none'
        }} 
        value={props.value}
        placeholder={props.placeholder}
        defaultValue={props.initialValue}
        onChange={props.onChange}
        autoFocus={props.autoFocus}
=======
      <p style={{ marginBottom: "4px", width: "100%" }}>{props.name}</p>
      <Input
        type="text"
        placeholder={props.placeholder}
        defaultValue={props.initialValue}
        class="b-none mt-1r w-web font-nunito p-1"
>>>>>>> ce236c81ea5073d2b28b8d8b06ac3bae4df21e21
      />
    </>
  );
}
