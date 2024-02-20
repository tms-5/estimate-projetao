export default function Button(props: {
  class?: string;
  text?: any;
  value?: any;
  onClick?: () => void | any;
  style?: "primary" | "secondary" | "tertiary";
}) {
  return (
    <button
      className={`${props.class} button-${props.style}`}
      onClick={props.onClick}
      value={props.value}
    >
      {props.text}
    </button>
  );
}
