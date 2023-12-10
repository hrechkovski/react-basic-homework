import { Metric } from "./Metric";
const statictics = [
  { number: "80K", title: "Followers" },
  { number: "803K", title: "Likes" },
  { number: "1.4K", title: "Photos" },
];

export const Metrics = () => {
  return (
    <div
      style={{
        display: "flex",

        width: "100%",
        justifyContent: "space-evenly",
        alignItems: "center",
        fontSize: "10px",
        borderTop: "1px solid lightgrey",
      }}
    >
      {statictics.map((metric) => (
        <Metric metric={metric} />
      ))}
    </div>
  );
};
