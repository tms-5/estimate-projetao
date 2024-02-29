export function returnDateAndTime() {
  let currentDate = new Date();
  return (
    currentDate
      .toLocaleString("pt-BR", {
        weekday: "short",
        day: "numeric",
        month: "short",
        year: "numeric",
      })
      .replace(".", "")
      .charAt(0)
      .toUpperCase() +
    currentDate
      .toLocaleString("pt-BR", {
        weekday: "short",
        day: "numeric",
        month: "short",
        year: "numeric",
      })
      .replace(".", "")
      .slice(1)
  );
}
