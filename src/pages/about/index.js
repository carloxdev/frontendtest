import React from 'react';
import ReactDOM from 'react-dom'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

import '../../components/master/index.js'
import Header from '../../components/header/index.js'
import BannerAbout from '../../components/banner-about/index.js'
import ContentAbout from '../../components/content-about/index.js';
import Footer from '../../components/footer/index.js'
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
            <Header option="about" />,
            document.getElementById('header')
        )
        ReactDOM.render(
            <BannerAbout />,
            document.getElementById('banner')
        )
        ReactDOM.render(
            <ContentAbout />,
            document.getElementById('content')
        )
        ReactDOM.render(
            <Footer />,
            document.getElementById('footer')
        )
    }
}