import { useState } from 'react';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';
import PopupImage from './components/PopupImage.jsx';
import PopupWithForm from './components/PopupWithForm.jsx';

function App() {

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState({})
  const [isImagePopup, setImagePopup ] = useState(false)

  function closePopups() {
    setEditProfilePopupOpen(false)
    setAddPlacePopupOpen(false)
    setEditAvatarPopupOpen(false)
    setImagePopup(false)
  }

  function handleProfileClick() {
    setEditProfilePopupOpen(true)
  }

  function handlePlaceClick() {
    setAddPlacePopupOpen(true)
  }

  function handleAvatarClick() {
    setEditAvatarPopupOpen(true)
  }

  function handleCardClick(card) {
    setSelectedCard(card)
    setImagePopup(true)
  }

  return (
    <div className="page">


    <Header />

    <Main
      onEditProfile = {handleProfileClick}
      onAddPlace ={handlePlaceClick}
      onEditAvatar = {handleAvatarClick}
      onCardClick = {handleCardClick}
    />

    <Footer />

    <PopupWithForm 
        name='edit-profile' 
        title='Редактировать профиль'
        isOpen = {isEditProfilePopupOpen}
        onClose = {closePopups}
      >
        <input
          id="username"
          type="text"
          name="name"
          className="popup__input popup__input_type_name"
          required=""
          placeholder="Ваше имя"
          minLength={2}
          maxLength={40}
        />
        <span id="name-error" className="error" />
        <input
          id="info"
          type="text"
          name="job"
          className="popup__input popup__input_type_info"
          required=""
          placeholder="Расскажите о себе"
          minLength={2}
          maxLength={200}
        />
        <span id="job-error" className="error" />
      </PopupWithForm>

      <PopupWithForm 
        name='add-card' 
        title='Новое место'
        titleButton='Создать'
        isOpen={isAddPlacePopupOpen}
        onClose = {closePopups}
      >
        <input
          id="place-name"
          type="text"
          className="popup__input popup__input_type_place"
          name="placeName"
          required=""
          placeholder="Место"
          minLength={2}
          maxLength={30}
        />
        <span id="placeName-error" className="error" />
        <input
          id="place-link"
          type="url"
          className="popup__input popup__input_type_link"
          name="placeLink"
          required=""
          placeholder="Ссылка"
        />
        <span id="placeLink-error" className="error" />
      </PopupWithForm>

      <PopupWithForm 
        name='personAvatar' 
        title='Обновить аватар'
        isOpen={isEditAvatarPopupOpen}
        onClose = {closePopups}
      >
        <input
            id="avatar"
            type="url"
            name="avatar"
            className="popup__input popup__input_type_avatar"
            required=""
            placeholder="Ссылка"
          />
          <span id="avatar-error" className="error" />
      </PopupWithForm>

      <PopupWithForm 
        name='delete' 
        title='Вы уверены?'
        titleButton='Да'
      />

      <PopupImage 
        card={selectedCard}
        isOpen={isImagePopup}
        onClose={closePopups}
      /> 
  </div>
  )
}

export default App
