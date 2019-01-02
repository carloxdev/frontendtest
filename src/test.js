import 'normalize.css'
import './test.css'
import Spinner from "stx-vanilla/src/Spinner/index.js"

/* ---------------- GLOBAL  ---------------- */
var page = null


/* ---------------- LOAD  ---------------- */
window.onload = function () {
    page = new Page()
}

/* ---------------- Page Object ---------------- */
class Page {
    constructor () {
        this.container = document.getElementById("main")
        this.spinner = new Spinner(this.container)
        this.spinner.start()
    }
}
