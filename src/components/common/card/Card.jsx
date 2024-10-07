import "./card.css";

export const Card = ({ title, price, stock }) => {
  return (
    <div className="container-card">
      <h2>{title}</h2>
      <h3>{price}</h3>
      <h3>{stock}</h3>
    </div>
  );
};
