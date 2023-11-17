export default function PopupWithForm ({name, title, titleButton, children, isOpen, onClose}) {
    return (
        <div className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`}>
            <div className="popup__container">
            <button type="button" className="popup__close-button" onClick={onClose}/>
            <h2 className="popup__header">{title}</h2>
            <form className="popup__form" name={name} noValidate="">
                {children}
                <button type="submit" className="popup__save-button">
                {titleButton||'Сохранить'}
                </button>
            </form>
            </div>
      </div>
    )
}