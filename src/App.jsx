import logo from './images/logo.svg';
import profileImg from './images/profile.jpg';

function App() {

  return (
    <>
    <div className="page">
      <header className="header">
        <img src={logo} className="header__logo" alt="Место"/>
      </header>
      <main className="main">
        <section className="profile">
          <button type="button" className="profile__avatar-button">
            <img
            className="profile__avatar"
            alt="Аватар"
            src={profileImg}
            /></button>
          <div className="profile__info">
            <div className="profile__id">
              <h1 className="profile__name">Жак-Ив Кусто</h1>
              <p className="profile__specialization">Исследователь океана</p>
            </div>
            <button className="profile__pencil" type="button"></button>
          </div>
          <button className="profile__add-button" type="button"></button>
        </section>
        <section className="elements">
          <ul className="elements__list elements"></ul>
        </section>
      </main>
      <footer className="footer">
        <p className="footer__text">&copy; 2020 Mesto Russia</p>
      </footer>
    </div>
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
    <template className="template-cards">
      <div className="card">
        <img className="card__img" src="." alt="."/>
        <div className="card__description">
          <h2 className="card__text"></h2>
          <button className="card__like-button" type="button">
            <span className="card__like-numbers">2</span>
          </button> 
        </div>
        <button className="card__delete-button" type="button"></button>
      </div>
    </template>
    </>
  )
}

export default App