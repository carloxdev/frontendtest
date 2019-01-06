import React from 'react'
import './styles.css'

class Footer extends React.Component {

    render () {
        return (
            <footer className="footer">
                <div className="footer-header">Derechos Reservados Lop México Ⓒ 2019</div>    
                <div className="footer-body">Powered by <a href="http://sintaxyz.com">Sintaxyz.com</a></div>
            </footer>
        )
    }
}

export default Footer
