import './Input_box.css'

function Input_box ({id, label, type = 'text', placeholder = '', value, onChange }){
    return (
        <div className='Input_box'>
            <label htmlFor={id} className='Textos_pequenos Input_label'>{label}</label>
            <input id={id} type={type} value={value} placeholder={placeholder}
                onChange={onChange}/>
        </div>
    );
}
export default Input_box