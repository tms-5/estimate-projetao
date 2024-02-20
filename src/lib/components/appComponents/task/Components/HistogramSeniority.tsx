import { Histogram } from "@/lib/components/charts/Histogram/Histogram";
import { seniorityType } from "@/store/enum";

export default function HistogramSeniority({
  data,
  size,
  seniority,
  real_time,
  estimated_time,
}: {
  data: number[];
  size: number;
  seniority: seniorityType;
  real_time: number;
  estimated_time: number;
}) {
  return (
    <div className="p-relative">
      <div className="legend-histogram-Y-axis">
        Quantidade de desenvolvedores
      </div>
      <Histogram data={data} width={size} height={300} />
      <div className="legend-histogram-X-axis">Tempo estimado (em horas)</div>
      <div className="mt-1r">
        <p className="f-07 fw-700 c-teal-blue-100 m-0 uppercase">{seniority}</p>
        <p className="f-08 m-0">
          <strong>Tempo médio utilizado: </strong>
          {real_time}
        </p>
        <p className="f-08 m-0">
          <strong>Tempo médio estimado: </strong>
          {estimated_time}
        </p>
      </div>
    </div>
  );
}
