"use client";

type StatTypes = "regular" | "profit" | "balance";

export default function DashboardStats(props: {value: string, text: string, type: StatTypes, color: string}) {
  return (
    <div className="b-8" style={{
      border: `1px solid #BDBDBD`,
      minWidth: "180px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "0 1rem",
    }}>
      <p className="f-1-5 fw-800" style={{color: props.color}}>{props.value}</p>
      <p className="f-08 fw-500 c-black" style={{color: props.color, marginTop: -20}}>{props.text}</p>
    </div>
  );
}
