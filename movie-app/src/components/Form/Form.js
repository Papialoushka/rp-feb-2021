import { Formik, Form, Field, useField, ErrorMessage } from 'formik';
import { useState, useCallback } from 'react';
import { connect, useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { format } from 'date-fns';

import Button from '../Button/Button';
import primaryButton from './../../styles/PrimaryButton.Module.scss';
import resetButton from './../../styles/ResetButton.Module.scss';
import formStyle from './Form.Module.scss'
import { editMovie } from '../../redux/actions';
import { addMovie } from '../../redux/reducers';

const filterCriteria = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];

const isValidUrl = (url) => {
  try {
    new URL(url);
  }
  catch (e) {
    console.error(e);
    return false;
  }
  return true;
};

const MovieSchema = Yup.object().shape({
  title: Yup.string()
            .required('Required'),
  releaseDate: Yup.string()
                  .required('Required'),
  genre: Yup.string()
            .required('Required'),
  overview: Yup.string()
               .required('Required'),
  runtime: Yup.number()
              .required('Required'),
  url: Yup.string()
          .required('Required')
          .test('is-url-valid', 'URL is not valid', (value) => {
            return isValidUrl(value);
          })
});

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <Field className='text-input' {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </>
  );
};

const Select = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </>
  );
};

const MovieForm = ({ movie = '', ...props }) => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        id: movie.id || '',
        title: movie.title || '',
        releaseDate: format(new Date(movie.release_date), 'yyyy-MM-dd') || '',
        url: movie.url || '',
        genre: movie.genre || '',
        overview: movie.overview || '',
        runtime: movie.runtime || '',
      }}
      validationSchema={MovieSchema}
      validate={values => {
        const errors = {};

        if (!values.title) {
          errors.title = 'Required';
        }

        if (!values.releaseDate) {
          errors.releaseDate = 'Required';
        }

        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        const choseSubmit = movie ? props.editMovie(values) : dispatch(addMovie(values));
      }}
    >
      {
        ({ errors, touched }) => (
          <Form className={formStyle.form}>
            <TextInput
              className={formStyle.disabled}
              label='Movie ID'
              name='id'
              id='id'
              type='text'
              disabled
            />

            <TextInput
              className={formStyle.input}
              label='Title'
              name='title'
              id='title'
              type='text'
              placeholder='e.g. Moana'
            />

            <TextInput
              className={formStyle.input}
              label='Release Date'
              name='releaseDate'
              id='releaseDate'
              type='text'
              placeholder='Format: yyyy-MM-dd'
            />

            <TextInput
              className={formStyle.input}
              label='Movie URL'
              name='url'
              id='url'
              type='url'
              placeholder='e.g. moana.com'
            />

            <Select
              label='Genre'
              name='genre'
              id='genre'
              className={formStyle.select}>
              <option value={movie.genre || ''}>{movie.genre || 'Select Genre'}</option>
              {filterCriteria.map((criterium, index) => (
                <option key={index}>
                  {criterium}
                </option>
              ))}
            </Select>

            <TextInput
              className={formStyle.input}
              label='Overview'
              name='overview'
              id='overview'
              type='text'
              placeholder='Type movie overview here'
            />

            <TextInput
              className={formStyle.input}
              label='Runtime'
              name='runtime'
              id='runtime'
              type='text'
              placeholder='Movie runtime'
            />

            <div className={formStyle.buttonWrapper}>
              <Button className={resetButton.resetButton} type='reset' name='Reset'/>
              <Button className={primaryButton.primaryButton} type='submit' name='Submit'/>
            </div>
          </Form>
        )
      }
    </Formik>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    // addMovie: (values) => dispatch(addMovie(values)),
    editMovie: (values) => dispatch(editMovie(values))
  }
}


export default connect(null, mapDispatchToProps)(MovieForm);
