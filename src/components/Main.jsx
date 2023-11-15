import profileImg from '../images/profile.jpg';

export default function Main() {
    return(
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
    )
}