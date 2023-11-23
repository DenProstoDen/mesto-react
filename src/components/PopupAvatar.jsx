import { useRef } from "react";
import PopupWithForm from "./PopupWithForm.jsx";
import CurentUserContext from "../context/CurentUserContext";
import useFormValidation from "../utils/FormValidation.js";

export default function PopupAvatar ({isOpen, onClose, newAvatar}) {
    const input = useRef();
    const { values, error, isValid, isInputValid, handleChange, reset } = useFormValidation();
    
    function resetClose() {
        onClose()
    }

    function handleSubmit(evt) {
        evt.preventDefault()
        newAvatar({avatar: input.current.value}, reset)
    }

    return (
    <PopupWithForm 
        name='personAvatar' 
        title='Обновить аватар'
        isOpen={isOpen}
        onClose={resetClose}
        onSubmit={handleSubmit}
        isValid={isValid}
      >
        <input
            id="avatar"
            type="url"
            name="avatar"
            className={`popup__input popup__input_type_avatar ${isInputValid.avatar === undefined || isInputValid.avatar ? '' : 'popup__input_invalid'}`}
            required
            placeholder="Ссылка"
            value={values.avatar ? values.avatar : ''}
            onChange={handleChange}
          />
          <span id="avatar-error" className="error"></span>
    </PopupWithForm>
    )
}