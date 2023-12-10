import "./Metric.css";

export const Metric = (props) => {
  const { metric } = props;
  return (
    <div>
      <p className="numbers">{metric.number}</p>
      <p className="titles">{metric.title}</p>
    </div>
  );
};
