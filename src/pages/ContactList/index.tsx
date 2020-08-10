import './styles.css'

import React from 'react'

import PageHeader from '../../components/PageHeader'
import ContactItem from '../../components/ContactItem'

function ContactList() {
  return (
    <div id='page-contact-list' className='container'>
      <PageHeader title='Estes são os contatos disponíveis'>
        <form id='search-contacts'>
          <div className='input-block'>
            <label htmlFor='skill'>Habilidade</label>
            <input type='text' id='skill' />
          </div>

          <div className='input-block'>
            <label htmlFor='category'>Catergoria</label>
            <input type='text' id='category' />
          </div>
        </form>
      </PageHeader>

      <main>
        <ContactItem></ContactItem>
        <ContactItem></ContactItem>
        <ContactItem></ContactItem>
      </main>
    </div>
  )
}

export default ContactList
