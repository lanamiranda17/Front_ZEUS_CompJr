import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

// Componente de campo de seleção customizado (select box), utilizado em formulários para seleção de opções.
function Select_box({ id, label, value, onChange, options, placeholder, disabled, multiple }) {
  const [showSetorMsg, setShowSetorMsg] = React.useState(false);

  const handleFocus = (e) => {
    if (disabled) {
      setShowSetorMsg(true);
      e.target.blur();
    }
  };
  const handleBlur = () => {
    setShowSetorMsg(false);
  };

  if (multiple) {
    // Modo múltipla seleção usando MUI Select
    return (
      <div className="Input_box">
        <label htmlFor={id} className="Input_label">{label}</label>
        <FormControl
          fullWidth
          disabled={disabled}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="FormControl_custom"
        >
          <Select
            labelId={`${id}-label`}
            id={id}
            multiple
            value={value}
            onChange={onChange}
            input={<OutlinedInput label={label} className="OutlinedInput_custom" />}
            renderValue={(selected) => Array.isArray(selected) ? selected.join(', ') : selected}
            MenuProps={MenuProps}
            displayEmpty={!value || (Array.isArray(value) && value.length === 0)}
            className="Select_custom"
            classes={{ select: 'Select_input_custom' }}
          >
            {!value?.length && <MenuItem disabled value="" className="MenuItem_placeholder">{placeholder}</MenuItem>}
            {options.map((opt) => (
              <MenuItem key={opt.value} value={opt.value} className="MenuItem_custom">
                <Checkbox checked={value.indexOf(opt.value) > -1} className="Checkbox_custom" />
                <ListItemText primary={opt.label} className="ListItemText_custom" />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {showSetorMsg && (
          <span style={{ color: '#dc2626', fontSize: 13, marginTop: 4, display: 'block' }}>
            Selecione o setor primeiro
          </span>
        )}
      </div>
    );
  }

  // Modo seleção simples com select HTML padrão
  return (
    <div className="Input_box">
      <label htmlFor={id} className="Input_label">{label}</label>
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
