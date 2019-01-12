import React from 'react'
import './styles.css'

import Promo from '../promo/index.js'
import Clients from '../clients/index.js'

const ContentHome = () => {
    return [
        <Promo key="1"></Promo>,
        <Clients key="2"></Clients>
    ]
}

export default ContentHome