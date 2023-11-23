import PopupWithForm from "./PopupWithForm.jsx";
import useFormValidation from "../utils/FormValidation.js";

export default function PopupPlace ({isOpen, onClose, onAddPlace}) {
    const { values, error, isValid, isInputValid, handleChange, reset } = useFormValidation();

    function resetClose() {
        onClose()
        reset()
    }

    function handleSubmit(evt) {
        evt.preventDefault()
        onAddPlace({name: values.name, link: values.link}, reset)
    }
    return (
        <PopupWithForm
        name='add-card' 
        title='Новое место'
        titleButton='Создать'
        isOpen={isOpen}
        isValid={isValid}
        onSubmit={handleSubmit}
        onClose = {resetClose}
      >
        <input
          id="place-name"
          type="text"
          className={`popup__input popup__input_type_place ${isInputValid.name === undefined || isInputValid.name ? '' : 'popup__input_state_invalid'}`}
          name="placeName"
          required=""
          placeholder="Место"
          minLength={2}
          maxLength={30}
          value={values.name ? values.name : ''}
          onChange={handleChange}
        />
        <span id="placeName-error" className="error"></span>
        <input
          id="place-link"
          type="url"
          className={`popup__input popup__input_type_link ${isInputValid.link === undefined || isInputValid.link ? '' : 'popup__input_state_invalid'}`}
          name="placeLink"
          required
          placeholder="Ссылка"
          value={values.link ? values.link : ''}
          onChange={handleChange}
        />
        <span id="placeLink-error" className="error"></span>
      </PopupWithForm>
    )   
}