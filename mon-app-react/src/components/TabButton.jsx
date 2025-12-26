function TabButton({children,onSelect,isSelected}){
    return(
        <button className={`TabButton ${isSelected ? 'active' : ''}`} onClick={onSelect}>
            {children}
        </button>
    )
}
export default TabButton;
