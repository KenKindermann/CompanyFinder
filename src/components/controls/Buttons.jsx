export const Button = ({ title, icon, onClick }) => {
  <button onClick={onClick}>
    {title}
    <img src={icon} alt={`${title} button`} />
  </button>;
};
