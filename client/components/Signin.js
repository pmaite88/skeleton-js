import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from './User';
import ErrorMessage from './ErrorMessage';
import { render } from 'react-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import redirect from '../lib/redirect';

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      email
      firstName
      lastName
    }
  }
`;

const Signin = () => (
  <Mutation
    mutation={SIGNIN_MUTATION}
    refetchQueries={[{ query: CURRENT_USER_QUERY }]}
  >
    {(signin, { error, loading }) => (
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            await signin({
              variables: values
            });
            resetForm();
            redirect({}, '/');
          } catch (_error) {
            setSubmitting(false);
          }
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email()
            .required('Required')
        })}
      >
        {props => {
          const {
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            handleSubmit
          } = props;

          return (
            <form onSubmit={handleSubmit}>
              <p>Please sign in</p>
              <ErrorMessage error={error} />
              <label htmlFor="email" style={{ display: 'block' }}>
                Email
              </label>
              <input
                id="email"
                placeholder="Enter your email"
                type="text"
                onChange={handleChange}
                value={values.email}
                className={
                  errors.email && touched.email
                    ? 'text-input error'
                    : 'text-input'
                }
              />
              <input
                id="password"
                placeholder="Enter your password"
                type="text"
                onChange={handleChange}
                value={values.password}
                className={
                  errors.password && touched.password
                    ? 'text-input error'
                    : 'text-input'
                }
              />
              {errors.email && touched.email && (
                <div className="input-feedback">{errors.email}</div>
              )}
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </form>
          );
        }}
      </Formik>
    )}
  </Mutation>
);

export default Signin;
export { SIGNIN_MUTATION };
