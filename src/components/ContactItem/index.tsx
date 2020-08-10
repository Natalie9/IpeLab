import React from 'react'

import './styles.css'


function ContactItem
() {
  return (
      <article className='contact-item'>
        <header>
          <img
            src='https://avatars0.githubusercontent.com/u/22748356?s=460&u=d78701bdee95869e4c57f9fbad4c24567a4c3e64&v=4'
            alt='Natalie Tolentino'
          />
          <div>
            <strong>Natalie Tolentino</strong>
            <span>Programação</span>
          </div>
        </header>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          <br />
          <br />
          Repudiandae molestiae nisi veritatis! Pariatur similique sunt eaque
          quod ducimus provident nulla explicabo. Provident, reiciendis!
        </p>
        <footer>
          <p>
            Disponibilidade
            <strong>02 horas/semana</strong>
          </p>
          <button>
            <img
              src='https://logodownload.org/wp-content/uploads/2015/04/whatsapp-logo-icone-1.png'
              alt='Whatsapp'
            />
            Entrar em contato
          </button>
        </footer>
      </article>
  )
}

export default ContactItem

