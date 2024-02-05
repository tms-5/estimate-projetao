export default function Button(props: {
  class?: string;
  text?: any;
  value?: any;
  onClick?: () => void | any;
}) {
  return (
    <button className={props.class} onClick={props.onClick} value={props.value}>
      {props.text}
    </button>
  );
}
