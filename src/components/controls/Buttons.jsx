// Button
export const Button = ({ title, icon, onClick }) => {
  return (
    <button onClick={onClick} className="custom-button">
      <img src={icon} alt={`${title} button`} />
      {title}
    </button>
  );
};

// Options button
export const OptionsButton = ({ title, icon, options }) => {
  return (
    <div className="custom-button">
      <img src={icon} alt={`${title} button`} />
      <select className="bg-transparent">
        {Object.values(options).map((title, index) => (
          <option key={index} value={title}>
            {title}
          </option>
        ))}
      </select>
    </div>
  );
};
