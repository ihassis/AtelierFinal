function TabButton({ children, onSelect, isSelected }) {
return (
    <button
    className={isSelected ? 'tab-button active' : 'tab-button'}
    onClick={onSelect}
    >
    {children}
    </button>
);
}

export default TabButton;