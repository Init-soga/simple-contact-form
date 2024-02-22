import React from 'react'

const Modal = ({ isOpen, children }) => {
  if (isOpen) {
    return (
      <>
        <div className='h-screen bg-slate-950 bg-opacity-90 z-50 fixed top-0 left-0 right-0 bottom-0'>
          <div className='font-extrabold fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-50 rounded p-5'>
            {children}
          </div>
        </div>
      </>
    )
  } else {
    return
  }
}

export default Modal
