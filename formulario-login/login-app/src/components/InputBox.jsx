import Input from "./Input"
export default function InputBox({type, placeholder, icon, eye, onClickEye, id, label, onChange, value}){
    return(
        <div className="inputBox">
            <label htmlFor={id}>{label}</label>
            <Input
                type={type}
                placeholder={placeholder}
                icon={icon}
                eye={eye}
                onClickEye={onClickEye}
                id={id}
                onChange={onChange}
                value={value}
            />
        </div>
    )
}