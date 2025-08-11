export default function Input({type, placeholder, icon, eye, onClickEye, onChange, value}){
    return(

        <div className="input-wrapper">
            <input
            type={type}
            placeholder={placeholder}
            className="input"
            icon={icon}
            eye={eye}
            onChange={onChange}
            value={value}
            />
            {eye && (
                <div className="eye-icon" onClick={onClickEye}>
                    {eye}
                </div>
            )}
        </div>

    )
}