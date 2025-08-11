export default function Button({type, onClick, label}){
    return (
        <button className="done-button" type={type} onClick={onClick}>
            {label}
        </button>
    )
}