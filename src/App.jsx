import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx'

function App() {

  return (
    <>
    <div className="page">
    </div>

    <Header />

    <Main />

    <Footer />

    <div className="popup popup-add">
      <div className="popup__container">
        <button type="button" className="popup__close-button"></button>
        <h2 className="popup__header">Редактировать профиль</h2>
        <form id="formEditProfile" className="popup__form" name="personName" noValidate>
          <input
            minLength="2"
            maxLength="40"
            className="popup__input popup__input_type_name"
            type="text"
            placeholder="Имя"
            name="name"
            required
          />
          <span id="name-error" className="error"></span>
          <input
            minLength="2"
            maxLength="200"
            className="popup__input popup__input_type_info"
            type="text"
            placeholder="О себе"
            name="job"
            required
          />
          <span id="job-error" className="error"></span>
          <button type="submit" className="popup__save-button">Сохранить</button>
        </form>
      </div>
    </div>
    <div className="popup popup_place-add">
      <div className="popup__container">
        <button type="button" className="popup__close-button"></button>
        <h2 className="popup__header">Новое место</h2>
        <form id="formEditPlace" className="popup__form popup__form_place" name="personInformation">
          <input
            minLength="2"
            maxLength="30"
            id="place-name"
            className="popup__input popup__input_type_place"
            type="text"
            placeholder="Место"
            name="placeName"
            required
          />
          <span id="placeName-error" className="error"></span>
          <input
            id="place-link"
            className="popup__input popup__input_type_link"
            type="url"
            placeholder="Ссылка"
            name="placeLink"
            required
          />
          <span id="placeLink-error" className="error"></span>
          <button type="submit" className="popup__save-button">Сохранить</button>
        </form>
      </div>
    </div>
    <div className="popup popup-image img-add">
      <div className="popup-image__container">
        <button type="button" className="popup__close-button"></button>
        <img src="." alt="." className="popup-image__picture"/>
        <h2 className="popup-image__text"></h2>
      </div>
    </div>
    <div className="popup popup-avatar">
      <div className="popup__container">
        <button type="button" className="popup__close-button"></button>
        <h2 className="popup__header">Обновить аватар</h2>
        <form id="formEditAvatar" className="popup__form popup__form_avatar" name="personAvatar">
          <input className="popup__input popup__input_type_avatar" type="url" placeholder="Ссылка" name="avatar" required/>
          <span id="avatar-error" className="error"></span>
          <button type="submit" className="popup__save-button" name="submitAva">Сменить</button>
        </form> 
      </div>
    </div>
    <div className="popup popup-delete">
        <div className="popup__container">
        <button type="button" className="popup__close-button"></button>
        <h2 className="popup__header">Вы уверены?</h2>
        <form name="cardDelete" className="popup__form popup__form_delete">
          <button type="submit" className="popup__save-button popup__delete-btn">Да</button>
        </form> 
      </div>
    </div>
    </>
  )
}

export default App
