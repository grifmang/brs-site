import React from "react";
import ButtonMailTo from "./sendEmail";
import Telephone from './telephone';

export const Contact = (props) => {
  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='contact-info'>
            <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'space-between' }} className='contact-item'>
              <p style={{ fontSize: 'xx-large' }}>
                <span>
                  <i className='fa fa-user'></i> Name
                </span>{' '}
                <hr />
                {props.data ? props.data.name : 'loading'}
              </p>
              <p style={{ fontSize: 'xx-large'}}>
                <span>
                  <i className='fa fa-phone'></i> Phone
                </span>{' '}
                <hr />
                <Telephone label="Call Me" />
              </p>
              <p style={{ fontSize: 'xx-large' }}>
                <span>
                  <i className='fa fa-envelope'></i> Email
                </span>{' '}
                <hr />
                <ButtonMailTo label="Email Me" mailto={props.data ? props.data.email : 'loading'} />
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
