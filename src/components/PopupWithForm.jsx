export default function PopupWithForm ({name, title, titleButton, children, isOpen, onClose}) {
    return (
        <section className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`}>
            <div className="popup__container">
            <button type="button" className="popup__close-button" onClick={onClose}/>
            <h3 className="popup__header">{title}</h3>
            <form className="popup__form" name={name} noValidate="">
                {children}
                <button type="submit" className="popup__save-button">
                {titleButton||'Сохранить'}
                </button>
            </form>
            </div>
      </section>
    )
}