"use client";

import Button from "@/lib/components/button/Button";
import { Histogram } from "@/lib/components/charts/Histogram/Histogram";
import { useEffect, useState } from "react";

export default function FakeHistogram({
  handleChangeUserCanView,
}: {
  handleChangeUserCanView: () => void;
}) {
  let dataFakeHistogram1 = [100, 200, 300, 300, 354, 654, 24, 200, 200, 200];
  let dataFakeHistogram2 = [
    100, 495, 300, 300, 293, 284, 25, 455, 254, 300, 100, 100, 300,
  ];
  let dataFakeHistogram3 = [300, 300, 354, 495, 284];

  const [size, setSize] = useState(500);

  useEffect(() => {
    const updateSize = () => {
      const layout = document.getElementById("Layout");
      if (layout) {
        setSize(layout.offsetWidth / 3 - 200);
      }
    };

    window.addEventListener("resize", updateSize);
    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className="histogram-hidden p-relative">
      <div className="p-absolute buttons-histogram d-grid justify-items-center">
        <Button
          text={"Estime e Ganhe!"}
          class="bg-teal-blue-100 c-white b-none no-filter p-1 w-fit fw-800"
        />
        <Button
          text={"Não ganhar e acessar as informações"}
          class="bg-teal-blue-50 b-none no-filter p-1 mt-1 fw-500"
          onClick={handleChangeUserCanView}
        />
      </div>
      <div className="d-flex justify-s-b blur-histogram">
        <Histogram data={dataFakeHistogram1} width={size} height={400} />
        <Histogram data={dataFakeHistogram2} width={size} height={400} />
        <Histogram data={dataFakeHistogram3} width={size} height={400} />
      </div>
    </div>
  );
}
