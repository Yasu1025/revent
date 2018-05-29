import React from 'react'
import { connect } from 'react-redux'
import TestModal from '../test/TestModal'
import { Modal } from 'semantic-ui-react';
import LoginModal from './ModalComponents/LoginModal'
import RegisterModal from './ModalComponents/RegisterModal'


const modalLookUp = {
    TestModal,
    LoginModal,
    RegisterModal
}

const mapState = (state) =>({
    currentModal: state.modals
})


const ModalManager = ({currentModal}) => {
  let renderedModal
  console.log(currentModal)
  if(currentModal){
      const {modalType, modalProps} = currentModal
      const ModalComponent = modalLookUp[modalType]
      console.log(ModalComponent)
      renderedModal = <ModalComponent {...modalProps} />
  } 
  return (
    <span>{renderedModal}</span>
  )
}

export default connect(mapState)(ModalManager)
