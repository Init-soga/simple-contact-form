import React, { useState } from 'react'
import { IMaskInput } from 'react-imask'
import Modal from '../Modal'

const ContactForm = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [childText, setChildText] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (
      firstName.length == 0 ||
      lastName.length == 0 ||
      email.length == 0 ||
      phone.length == 0 ||
      message.length == 0
    ) {
      setChildText('Please fill in all the fields so we can contact you')
      setIsModalOpen(true)
      return
    } else if (phone.length != 14) {
      setChildText('Please enter a valid phone number')
      setIsModalOpen(true)
    } else if (!email.includes('@') || !email.includes('.')) {
      setChildText('Please enter a valid email')
      setIsModalOpen(true)
    }

    setChildText(
      'Your form has been sent successfully! We will contact you as soon as possible.'
    )
    setIsModalOpen(true)
    setFirstName('')
    setLastName('')
    setEmail('')
    setPhone('')
    setMessage('')
  }

  return (
    <>
      <Modal isOpen={isModalOpen}>
        <div className='pb-5'>
          <span>{childText}</span>
        </div>
        <div className='flex justify-center md:justify-start'>
          <button
            className='px-3 py-1 bg-[#7439c4] rounded-full text-white'
            onClickCapture={() => setIsModalOpen(!isModalOpen)}
          >
            Close
          </button>
        </div>
      </Modal>

      <div className='w-screen flex flex-col items-center justify-center pt-8'>
        <img src='./src/assets/call.png' />
        <h2 className='font-bold text-4xl text-white'>Contact Form</h2>

        <div className='mx-7 md:w-1/3 h-auto mt-8'>
          <form>
            <div className='flex flex-wrap gap-5 mb-4'>
              <div className='grow flex-1'>
                <label htmlFor='firstName' className='block text-white'>
                  First name
                </label>
                <input
                  className='block w-full h-8 rounded p-2'
                  type='text'
                  placeholder='Jacob'
                  onChange={e => setFirstName(e.target.value)}
                  value={firstName}
                />
              </div>
              <div className='grow flex-1'>
                <label htmlFor='lastName' className='block text-white'>
                  Last name
                </label>
                <input
                  className='block w-full h-8 rounded p-2'
                  type='text'
                  placeholder='Elordi'
                  onChange={e => setLastName(e.target.value)}
                  value={lastName}
                />
              </div>
            </div>
            <div className='mb-4 flex flex-wrap'>
              <label htmlFor='email' className='block text-white'>
                E-mail
              </label>
              <input
                className='block w-full rounded h-8 p-2'
                type='email'
                value={email}
                placeholder='email@adress.com'
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className='mb-4 flex flex-wrap'>
              <label htmlFor='phone' className='block text-white'>
                Phone number
              </label>
              <IMaskInput
                className='block w-full rounded h-8 p-2'
                placeholder='(555) 555-1234'
                mask='(000) 000-0000'
                onChange={e => setPhone(e.target.value)}
                value={phone}
              ></IMaskInput>
            </div>
            <div className='mb-4 flex flex-wrap'>
              <label htmlFor='message' className='block text-white'>
                Your message
              </label>
              <textarea
                className='block w-full rounded h-24 p-2'
                name='message'
                placeholder='Write your question or intention here so that we can continue your service.'
                onChange={e => setMessage(e.target.value)}
                value={message}
              ></textarea>
            </div>
            <div className='flex justify-center mt-8 md:justify-start'>
              <button
                className='bg-transparent border text-white px-5 py-1 rounded-full'
                type='submit'
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default ContactForm
