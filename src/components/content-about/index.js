import React from 'react'
import './styles.css'

import Team from '../team/index.js'
import Allies from '../allies/index.js'

const ContentAbout = () => {
    return [
        <Team key="1"></Team>,
        <Allies key="2"></Allies>
    ]
}

export default ContentAbout