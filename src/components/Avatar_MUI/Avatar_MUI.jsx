import * as React from 'react';
import './Avatar_MUI.css';
import Icon_camera from '../../assets/Icons/Icon_camera.svg';

// Componente de avatar customizado utilizando Material-UI, usado para exibir a foto do usuário ou funcionário.
export default function UploadAvatars() {
  const [avatarSrc, setAvatarSrc] = React.useState(undefined);

  const handleAvatarChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setAvatarSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <label className="AvatarUpload_circle">
      {avatarSrc ? (
        <img src={avatarSrc} alt="Avatar" className="AvatarUpload_img" />
      ) : (
        <>
          <span className="AvatarUpload_icon">
            <img src={Icon_camera} alt="Camera" />
          </span>
          <span className="AvatarUpload_text">Carregar foto</span>
        </>
      )}
      <input
        type="file"
        accept="image/*"
        className="AvatarUpload_input"
        onChange={handleAvatarChange}
      />
    </label>
  );
}
