export default function TabButton({ children, isSelected, ...extraProps }) {
  console.log("tabButton Component executing");

  return (
    <li>
      <button className={isSelected ? "active" : undefined} {...extraProps}>
        {children}
      </button>
    </li>
  );
}
