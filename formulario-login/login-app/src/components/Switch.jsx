import '.././index.css'
export default function Switch({id, onClick, checked}){
    return (
        <>
            <input 
                type="checkbox" 
                name={id} 
                id={id} 
                className="switch" 
                onClick={onClick} 
                checked={checked}
            />
        </>
    )   
} 