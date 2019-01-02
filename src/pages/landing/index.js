import '../../components/master/index.js'
import MainHeader from '../../components/main-header/index.js'

import './styles.css'


/* ---------------- GLOBAL  ---------------- */
var page = null


/* ---------------- LOAD  ---------------- */
window.onload = function () {
    page = new Page()
}


/* ---------------- Page Object ---------------- */
class Page {
    constructor () {
        this.main_header = new MainHeader()
    }
}