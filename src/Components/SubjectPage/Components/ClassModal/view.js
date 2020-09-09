import React from 'react'

import Button from '../../../Button'
import DatePicker from 'react-datepicker'
import InterestedPeople from '../InterestedPeople'
import Modal from '../../../Modal'
import TextInput from '../../../TextInput'
import SelectionList from '../../../SelectionList'
import './style.css'

const ClassModal = ({ close, form, onSave, open, scheduleType, title, updateDate, updateFormField }) => {
  return (
    <div className="class-modal">
      <Modal onClose={close} open={open}>
        <h2>{ title }</h2>
        { scheduleType !== 'attendance' && (
          <div className="form-group">
            <label>Date</label>
            <DatePicker
              dateFormat="dd/MM/yy - HH:mm"
              onChange={date => {updateDate(date)}}
              selected={form.date}
              showTimeSelect
              timeFormat="HH:mm"
            />
          </div>
        )}
        { scheduleType !== 'attendance' && (
          <div className="form-group">
            <SelectionList
              onChange={ (e) => { updateFormField('duration', e.target.value) } }
              list={ [0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0] }
              unit = "hour(s)"
              placeholder="Duration"
              value={ form.duration }
            />
          </div>
        )}
        { scheduleType !== 'attendance' && (
          <TextInput
            onChange={ (e) => { updateFormField('room', e.target.value) } }
            placeholder="Classroom"
            value={ form.room }
          />
        )}
        <InterestedPeople groupId="classModal" scheduleType={scheduleType} />
        { scheduleType === 'attendance' && (
          <TextInput
            onChange={ (e) => { updateFormField('npsURL', e.target.value) } }
            placeholder="NPS link"
            value={ form.npsURL }
          />
        )}
        <div className="button-container">
          <Button onClick={close} >Cancel</Button>
          <Button onClick={() => {onSave(form)}} >Save</Button>
        </div>
      </Modal>
    </div>
  )
}

export default ClassModal
