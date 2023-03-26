import logo from '../logo.svg';
import style from "./Nav.module.scss"

function Nav(props) {
  return (
    <div className={style.nav}>
      <a onClick={props.modalHandler} href="#mainBlock">About</a>
      <a onClick={props.modalHandler} href="#skillsBlock">Skills</a>
      <a onClick={props.modalHandler} href="#portfolioBlock">Portfolio</a>
      <a onClick={props.modalHandler} href="#contactsBlock">Contacts</a>
    </div>
  );
}

export default Nav;


