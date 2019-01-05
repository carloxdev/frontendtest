import React from 'react';
import ReactDOM from 'react-dom'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

import '../../components/master/index.js'
// import '../../components/footer/index.js'
import HeaderHome from '../../components/header-home/index.js'
import './styles.css'

library.add(faTimes)
library.add(faBars)
library.add(faAngleDown)


/* ---------------- GLOBAL  ---------------- */
var page = null


/* ---------------- LOAD  ---------------- */
window.onload = function () {
    page = new Page()
}


/* ---------------- Page Object ---------------- */
class Page {
    constructor () {
        ReactDOM.render(
            <HeaderHome />,
            document.getElementById('main')
        )
    }
}