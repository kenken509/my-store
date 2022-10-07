import { useState, useContext } from 'react';
import {
  signInWithGooglePopup,
  createUserDocFromAuth,
  signInAuthWithEmailAndPassword,
} from '../utils/firebase/firebase.utils';
import FormInput from '../routes/form-input/form-input.component';
import './sign-in-form.styles.scss';
import Button from '../button/button.component';
import { UserContext } from '../../context/user.context';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  // console.log(formFields);

  // user context
  const { setCurrentUser } = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocFromAuth(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthWithEmailAndPassword(email, password);
      if (user.uid) {
        alert('Logged in successfully');
        setCurrentUser(user);
      }
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case 'auth/user-not-found':
          alert('User not found');
          break;

        case 'auth/wrong-password':
          alert('Invalid password');
          break;

        default:
          console.log(error.code);
          break;
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h2>Already have an account?</h2>
      <h4>
        <span>
          <i>Sign in with your email and password</i>
        </span>
      </h4>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          name="email"
          value={email}
          onChange={handleChange}
        />

        <FormInput
          label="Password"
          type="password"
          required
          name="password"
          value={password}
          onChange={handleChange}
        />

        <div className="buttons-container">
          <Button buttonType="inverted" type="submit">
            Sign In
          </Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
