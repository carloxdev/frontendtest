import React from 'react'
import './styles.css'

const ListClients = () => {    
    return [
        <article className="list-clients"> 
            <header className="list-clients-header">
                Nuestros Clientes
            </header>
            <section className="list-clients-body">
                <figure className="list-clients-body-img">
                    <img src="/static/images/clients/imagen1.png" alt="bonilla" />
                </figure>
                {/* <figure className="list-clients-body-img">
                    <img src="/static/images/clients/imagen2.png" alt="hemore" />
                </figure> */}
                {/* <figure className="list-clients-body-img">
                    <img src="/static/images/clients/imagen3.png" alt="rir" />
                </figure> */}
                <figure className="list-clients-body-img">
                    <img src="/static/images/clients/imagen4.png" alt="albasur" />
                </figure>
                {/* <figure className="list-clients-body-img">
                    <img src="/static/images/clients/imagen5.png" alt="j&marjus" />
                </figure> */}
                <figure className="list-clients-body-img">
                    <img src="/static/images/clients/imagen6.png" alt="comerspro" />
                </figure>    
            </section>
        </article>
    ]
}

export default ListClients
