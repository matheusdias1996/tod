import React from 'react'
import { Link, Redirect } from 'react-router-dom'

import './style.css'
import User from '../User'
import Modal from '../Modal'
import { add } from 'lodash'
import TextInput from '../TextInput'
import Button from '../Button'

//<TextInput //Qual é o request que precisa ser feito aqui? Imagino que seja addAttended etc... mas preciso de um if statement
  //    onChange={e => {updateForm('email', e.target.value)}} //uso updateForm mesmo?
   //   placeholder="E-mail"
     // value={User.email} //Posso usar User.email? 
   // />

// Tronar on Click variável
//type="email"
//value = {trained.email}
//'5d7112d2edbdc93f541b23d9'

const CollapsableList = ({ closeList, itemTemplate, list, name, open, openList, trained, untrained, updateForm, addAttended, deleteAttended, token, id}) => ( 
  <div className={'list ' + (open ? 'opened' : 'closed')}>
    <div className="list-header" onClick={ open ? closeList : openList }>
      <div>{ name.charAt(0).toUpperCase() + name.slice(1) }</div>
      <div><i className={ 'fas fa-angle-' + (open ? 'up' : 'down') }></i></div>
    </div>
    <div className="list-items">
    <form className="trained" onSubmit={ e => {
            e.preventDefault()
            addAttended(trained.email, 'trained',  '5d71138aedbdc93f541b248b', token)
          } }>
            <TextInput
              onChange={e => {updateForm('trained', 'email', e.target.value)}}
              placeholder="E-mail"  
              value = {trained.email}
            />
            <input className="hidden" type="submit" />
          </form>
          <div className="add-student-button">
          <Button onClick={ () => { console.log('button');addAttended(trained.email, 'trained',  '5d71138aedbdc93f541b248b', token)}}>Adicionar</Button> 
          </div>
          <div className="delete-student-button">
          <Button onClick={ () => {deleteAttended(trained.email, 'trained', '5d71138aedbdc93f541b248b', token) } }>Deletar</Button> 
          </div>
      { list.map((item, index) => (
        <div className="list-item" key={index}>
          { itemTemplate(item) }
        </div>
      ))}
    </div>
  </div>
)

export default CollapsableList

