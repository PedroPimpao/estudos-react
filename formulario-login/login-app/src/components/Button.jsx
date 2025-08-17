export default function Button({type, onClick, label, className="button"}){
    return (
        <button className={className} type={type} onClick={onClick}>
            {label}
        </button>
    )
}