export default function Input(props: {
  type: string;
  class?: string;
  placeholder?: string;
  onChange?: (e: any) => void;
  onBlur?: (e: any) => void;
  value?: any;
  disabled?: boolean;
  name?: string;
  defaultValue?: string;
}) {
  return (
    <input
      type={props.type}
      name={props.name}
      className={props.class}
      placeholder={props.placeholder}
      onChange={props.onChange}
      onBlur={props.onBlur}
      value={props.value}
      disabled={props.disabled}
      defaultValue={props.defaultValue}
    />
  );
}
