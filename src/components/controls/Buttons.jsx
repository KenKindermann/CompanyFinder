export const Button = ({ title, icon, onClick }) => {
  return (
    <button onClick={onClick}>
      {title}
      <img src={icon} alt={`${title} button`} />
    </button>
  );
};
