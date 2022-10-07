import {
  signInWithGooglePopup,
  createUserDocFromAuth,
  signInAuthWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';
import SignUpForm from '../sign-up-form/sign-up-form.component';
import FormInput from '../form-input/form-input.component';
import { useState } from 'react';
import Button from '../../button/button.component';
import SignInForm from '../../sign-in-form/sign-in-form.component';
import './authentication.styles.scss';

//************************************************************************ */

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
