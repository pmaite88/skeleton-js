import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from './User';
import ErrorMessage from './ErrorMessage';
import { render } from 'react-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $email: String!
    $firstName: String!
    $lastName: String!
    $password: String!
  ) {
    signup(
      email: $email
      firstName: $firstName
      lastName: $lastName
      password: $password
    ) {
      id
      email
      firstName
      lastName
    }
  }
`;

const Signup = () => (
  <Mutation
    mutation={SIGNUP_MUTATION}
    refetchQueries={[{ query: CURRENT_USER_QUERY }]}
  >
    {(signup, { error, loading }) => (
      <Formik
        initialValues={{ firstName: '', lastName: '', email: '', password: '' }}
        onSubmit={async (values, { resetForm }) => {
          await signup({
            variables: values
          });
          resetForm();
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
            handleSubmit,
            handleReset
          } = props;

          return (
            <form onSubmit={handleSubmit}>
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
                id="firstName"
                placeholder="Enter your first name"
                type="text"
                onChange={handleChange}
                value={values.firstName}
                className={
                  errors.firstName && touched.firstName
                    ? 'text-input error'
                    : 'text-input'
                }
              />
              <input
                id="lastName"
                placeholder="Enter your last name"
                type="text"
                onChange={handleChange}
                value={values.lastName}
                className={
                  errors.lastName && touched.lastName
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

              <button
                type="button"
                className="outline"
                onClick={handleReset}
                disabled={!dirty || isSubmitting}
              >
                Reset
              </button>
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

export default Signup;
export { SIGNUP_MUTATION };
