import './styles.css'

export default class MainHeader {

    constructor () {
        this.menu = document.getElementById("main-header-menu")
        this.icon = document.getElementById("main-header-icon")
        
        
        this.set_Events()
    }

    set_Events () {
        this.button.addEventListener(
            "click",
            this.click_Button.bind(this)
        )
    }

    // click_Button (event) {
    //     event.preventDefault()
    //     this.open()
    // }

    // mouseleave_Container (event) {
    //     event.preventDefault()
    //     this.close()
    // }

    // open () {
    //     if (this.check_IsOpen() == true) {
    //         this.close()
    //     }
    //     else {
    //         this.container.classList.remove('menu--close')
    //         this.button.classList.add('main-header-icon--active')
    //     }
    // }

    // close () {
    //     this.container.classList.add('menu--close')
    //     this.button.classList.remove('main-header-icon--active')
    // }

    // check_IsOpen () {
    //     let value = this.container.classList.contains('menu--close')
    //     if (value == true)
    //     {
    //         return false
    //     }
    //     else {
    //         return true
    //     }
    // }
}

