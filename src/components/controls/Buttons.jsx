export const Button = ({ title, icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-custom-blue px-4 py-2 flex justify-center items-center rounded-lg text-white"
    >
      <img src={icon} alt={`${title} button`} />
      {title}
    </button>
  );
};
