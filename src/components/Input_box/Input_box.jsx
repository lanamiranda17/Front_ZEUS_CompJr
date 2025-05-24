import './Input_box.css'

// Componente de campo de entrada customizado (input box), utilizado em formulários para digitação de dados.
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