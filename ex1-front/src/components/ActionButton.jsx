export default function ActionButton({
  children,
  onClick,
  disabled,
  type = "button",
}) {
  return (
    <button
      type={type}
      className="action-button"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
