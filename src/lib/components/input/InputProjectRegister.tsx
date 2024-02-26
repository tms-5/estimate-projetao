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
}) {
  return (
    <>
      <p style={{ marginBottom: "4px", width: "100%" }}>{props.name}</p>
      <Input
        type="text"
        placeholder={props.placeholder}
        defaultValue={props.initialValue}
        class="b-none mt-1r w-web font-nunito p-1"
      />
    </>
  );
}
