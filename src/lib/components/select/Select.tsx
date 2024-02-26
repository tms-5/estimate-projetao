export default function Select(props: {
  options: { value: string | number; key: string | number }[];
  class?: string;
  onChange: (e: any) => void;
  value?: any;
  disabled?: boolean;
  name?: string;
  defaultValue?: string;
}) {
  return (
    <select
      name={props.name}
      className={props.class}
      onChange={props.onChange}
      value={props.value}
      disabled={props.disabled}
      defaultValue={props.defaultValue}
    >
      {props.options.map((option) => (
        <option key={option.key} value={option.key}>
          {option.value}
        </option>
      ))}
    </select>
  );
}
