export default function formatDate(value) {
  const date = new Date(value);
  const options = { day: "numeric", month: "long", year: "numeric" };

  const outputString = date
    .toLocaleDateString("en-US", options)
    .replace(/,/g, "");

  return outputString;
}
