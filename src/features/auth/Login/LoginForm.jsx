import React from 'react';
import { connect } from 'react-redux'
import { Form, Segment, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import TextInput from '../../../app/common/Form/TextInput';
import { logIn } from '../authAction'

const actions = {
    logIn
}

const LoginForm = ({logIn, handleSubmit}) => {
  return (
    <Form error size="large" onSubmit={handleSubmit(logIn)}>
      <Segment>
        <Field
          name="email"
          component={TextInput}
          type="text"
          placeholder="Email Address"
        />
        <Field
          name="password"
          component={TextInput}
          type="password"
          placeholder="password"
        />
        <Button fluid size="large" color="teal">
          Login
        </Button>
      </Segment>
    </Form>
  );
};

export default connect(null, actions)(reduxForm({form: "loginForm"})(LoginForm));