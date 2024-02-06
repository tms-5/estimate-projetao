export default function PageTitle(props: { title: string; subTitle: string }) {
  return (
    <>
      <div className="mt-2r">
        <p className="f-06 fw-700 c-teal-blue-100 m-0">{props.title}</p>
        <h1 className="f-1-2 fw-700 m-0">{props.subTitle}</h1>
      </div>
    </>
  );
}
