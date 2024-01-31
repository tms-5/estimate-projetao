export default function Card(props: {
  header?: React.ReactNode;
  content: React.ReactNode;
  footer?: React.ReactNode;
  class?: string;
}) {
  return (
    <div className={props.class ?? "card-default"}>
      {props.header}
      {props.content}
      {props.footer}
    </div>
  );
}
