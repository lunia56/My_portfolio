import style from "./Contacts.module.css"
import styleContainer from "./../common/styles/Container.module.css"
import styler from "./Contacts.module.css"

function Contacts() {
    return (
        <div className={styler.contactsBlock}>
            <div className={styleContainer.container + " " + styler.contactsContainer}>
                <h2 className={styler.title}>Contacts</h2>
                <form className={styler.form}>
                    <input type={"text"} className={styler.formItem} placeholder={"Как к Вам обращаться"}/>
                    <input type={"number"} className={styler.formItem} placeholder={"Как с Вами связаться"}/>
                    <textarea className={`${styler.formItem} ${styler.formItemTextarea}`} placeholder={"Комментарий"}/>
                </form>
                <button className={styler.button}><a href="#">Отправить</a> </button>

            </div>
        </div>
    );
}

export default Contacts;
