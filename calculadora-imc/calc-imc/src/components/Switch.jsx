export default function Switch({id, label, onChange, checked}){
    return(
        <div className="switch-container">
            <label htmlFor={id}>{label}</label>
            <input type="checkbox" name={id} id={id} onChange={onChange} checked={checked} className='switch'/>
        </div>
    )
}