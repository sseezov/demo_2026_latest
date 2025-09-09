import { useEffect } from 'react'
import electronLogo from './assets/electron.svg'

function App() {
  // useEffect(() => {
  //   (async (data = "test") => await window.api.foo(data))()
  // }, [])
  async function submitHandler(e) {
    e.preventDefault()
    const user = {
      login: e.target.login.value,
      password: e.target.password.value,
    }
    console.log(user)
    const role = await window.api.autorizeUser(user);
    console.log(role)
    document.querySelector('form').reset()
  }

  return (
    <>
      {/* <img alt="logo" className="logo" src={electronLogo} /> */}
      <h1>Приветствие!</h1>
      <h4>Введите логин и пароль, чтобы войти</h4>
      <form onSubmit={(e) => submitHandler(e)}>
        <label htmlFor="login">Логин:</label>
        <input id="login" type="text" required />
        <label htmlFor="password">Пароль:</label>
        <input id="password" type="text" required />
        <button type="submit">Войти</button>
      </form>
      <h5>Перейти на экран просмотра товаров в виде гостя</h5>
      <button>Посмотреть товары</button>
    </>
  )
}

export default App

