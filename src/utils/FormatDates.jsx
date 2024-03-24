export default function formatDate(dateTimeString) {
  const date = new Date(dateTimeString);
  return date.toISOString().split("T")[0].replace(/-/g, " | ");
}