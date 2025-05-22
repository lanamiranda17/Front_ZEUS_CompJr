import './Input_box.css';
import { useState } from 'react';

function Select_box({ id, label, value, onChange, options, placeholder, disabled }) {
  const [showSetorMsg, setShowSetorMsg] = useState(false);

  const handleFocus = () => {
    if (disabled) setShowSetorMsg(true);
  };
  const handleBlur = () => {
    setShowSetorMsg(false);
  };

  return (
    <div className="Input_box">
      <label htmlFor={id} className="Textos_pequenos Input_label">{label}</label>
      <select
        className="Input_input Select_box"
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        style={{ color: value === '' ? '#9ca3af' : '#111827' }}
        disabled={disabled}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        <option value="" disabled hidden>{placeholder}</option>
        {options.map(opt => (
          <option key={opt.value} value={opt.value} style={{ color: '#111827' }}>{opt.label}</option>
        ))}
      </select>
      {showSetorMsg && (
        <span style={{ color: '#dc2626', fontSize: 13, marginTop: 4, display: 'block' }}>
          Selecione o setor primeiro
        </span>
      )}
    </div>
  );
}

export default Select_box;
