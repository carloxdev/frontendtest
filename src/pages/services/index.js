import '../../components/master/index.js'
import HeaderMain from '../../components/header-main/index.js'

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
        this.main_header = new HeaderMain()
        this.main_header.select_Option('page_services')
    }
}