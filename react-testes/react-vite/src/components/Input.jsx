export default function Input(props){
    return (
        <div className="input-wrapper">
            <input
            className="input-field"
            type={props.type}
            id={props.id}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
            />


            {
                props.eye && (
                    <div className="eye-icon" onClick={props.onClick}>
                        {props.eye}
                    </div>
                )
            }
        </div>
    )
}