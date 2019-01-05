import '../../components/master/index.js'
import '../../components/footer/index.js'
import Header from '../../components/header/index.js'

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
        this.header = new Header()
        this.header.select_Option('page_services')
    }
}