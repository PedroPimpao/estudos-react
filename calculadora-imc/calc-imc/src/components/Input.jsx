export default function Input({id, label, placeholder, onChange}){
    return(
        <div className="input-box">
            <label htmlFor={id}>{label}</label>
            <input 
            type="text" 
            id={id}
            className='input-field'
            placeholder={placeholder}
            onChange={onChange}
            />
        </div>
    )
}