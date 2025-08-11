// import '.././index.css'
export default function Switch({id, onChange, checked}){
    return (
        <>
            <input 
                type="checkbox" 
                name={id} 
                id={id} 
                className="switch" 
                onClick={onChange} 
                checked={checked}
            />
        </>
    )   
} 