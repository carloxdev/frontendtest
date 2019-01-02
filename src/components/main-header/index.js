import './styles.css'

export default class MainHeader {

    constructor () {
        this.menu = document.getElementById("main-header-menu")
        this.open_btn = document.getElementById("main-header-openbtn")
        this.close_btn = document.getElementById("main-header-menu-closebtn")
        
        this.set_Events()
    }

    set_Events () {
        this.open_btn.addEventListener(
            "click",
            this.click_OpenIcon.bind(this)
        )

        this.close_btn.addEventListener(
            "click",
            this.click_CloseIcon.bind(this)
        )
    }

    click_OpenIcon (event) {
        event.preventDefault()
        this.menu.classList.add('main-header-menu--show')
    }

    click_CloseIcon (event) {
        event.preventDefault()
        this.menu.classList.remove('main-header-menu--show')
    }

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

