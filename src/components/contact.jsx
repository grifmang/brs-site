import { useState } from 'react';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';
import React from "react";

require('dotenv').config()

const initialState = {
  name: '',
  email: '',
  message: '',
  token: '',
  isVerified: false
}
export const Contact = (props) => {
  const [{ name, email, message, token, isVerified }, setState] = useState(initialState)

  // const handleToken = (token) => {
  //   setState((currentForm) => {
  //    return {...currentForm, token }
  //   })
  // }

  const handleExpire = () => {
    setState((currentForm) => {
     return {...currentForm, token: null }
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }
  const clearState = () => setState({ ...initialState })

  const handleToken = (token) => {
    setState((prevState) => ({ ...prevState, token: token, isVerified: true }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_32dhyws', 'template_dq55sxe', e.target, 'user_rVHriXA2NSg2HKr1RODSm'
      )
      .then(
          () => { clearState() },
        (error) => {
          console.log(error.text)
        }
      )
  }
  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='section-title'>
                <h2>Installing bowling lanes in your home?</h2>
                <p>
                Looking to install a bowling lane in your home? We can help!
                Fill out the form below and we will get back to you as soon as possible.
                 <strong> Please include # of lanes and Contact Number in your message.</strong>
                </p>
              </div>
              <form name='sentMessage' onSubmit={handleSubmit}>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        value={name}
                        className='form-control'
                        placeholder='Name'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        value={email}
                        className='form-control'
                        placeholder='Email'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                  <textarea
                    name='message'
                    id='message'
                    className='form-control'
                    rows='4'
                    placeholder='Message'
                    value={message}
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className='help-block text-danger'></p>
                </div>
                <ReCAPTCHA
                  sitekey={process.env.REACT_APP_SITE_KEY}
                  onChange={handleToken}
                />
                <div id='success'></div>
                <button type='submit' disabled={!isVerified} className='btn btn-custom btn-lg'>
                  Send Request
                </button>
              </form>
            </div>
          </div>
          <div className='col-md-3 col-md-offset-1 contact-info'>
            <div style={{ textAlign: 'center' }} className='contact-item'>
              <p style={{ fontSize: 'xx-large' }}>
                <span>
                  <i className='fa fa-phone'></i> Phone
                </span>{' '}
                {props.data ? props.data.phone : 'loading'}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id='footer'>
        <div className='container text-center'>
          <p>
            &copy; 2021 Advanced IT Solutions Design by{' '}
            <a href='http://www.advanceditsolutions.net' rel='nofollow'>
              Advanced IT Solutions
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
