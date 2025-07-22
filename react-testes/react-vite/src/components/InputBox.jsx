import Input from "./Input.jsx"
export default function InputBox(props){
    return (
        <div className="input-box">
            <label htmlFor={props.id}>{props.label}</label>
            <Input {...props}/>
        </div>
    )
}