import React from 'react'
import './styles.css'

import ListPromo from '../list-promo/index.js'
import ListClients from '../list-clients/index.js'

const ContentHome = () => {
    return [
        <ListPromo key="1"></ListPromo>,
        <ListClients key="2"></ListClients>
    ]
}

export default ContentHome