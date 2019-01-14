import React from 'react'
import './styles.css'

import ListTeam from '../list-team/index.js'
import ListAllies from '../list-allies/index.js'

const ContentAbout = () => {
    return [
        <ListTeam key="1"></ListTeam>,
        <ListAllies key="2"></ListAllies>
    ]
}

export default ContentAbout