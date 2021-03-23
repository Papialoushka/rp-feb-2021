import { Formik, useFormik, Form, useField } from 'formik';
import { useState, useCallback } from 'react';
import { connect } from 'react-redux';

import Button from '../Button/Button';
import primaryButton from './../../styles/PrimaryButton.Module.scss';
import resetButton from './../../styles/ResetButton.Module.scss';
import formStyle from './Form.Module.scss'
import { addMovie, editMovie } from '../../redux/actions';

const filterCriteria = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className='text-input' {...field} {...props} />
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
  if (props.modalTitle === 'delete') {
    return null;
  }

  return (
    <>
      <Formik
        initialValues={{
          id: movie.id || '',
          title: movie.title || '',
          releaseDate: new Date(movie.release_date).toLocaleString() || '',
          genre: movie.genre || '',
          overview: movie.overview || '',
          runtime: movie.runtime || '',
          url: movie.url || '',
        }}
        onSubmit={(values, { setSubmitting }) => {
          const choseSubmit = movie ? props.editMovie(values) : props.addMovie(values);
        }}
      >
        <Form className={formStyle.form}>
          <TextInput
            className={formStyle.disabled}
            label='Movie ID'
            name='id'
            type='text'
            disabled
          />

          <TextInput
            className={formStyle.input}
            label='Title'
            name='title'
            type='text'
            placeholder='e.g. Moana'
          />

          <TextInput
            className={formStyle.input}
            label='Release Date'
            name='releaseDate'
            type='date'
            placeholder='Select Date'
          />

          <TextInput
            className={formStyle.input}
            label='Movie URL'
            name='url'
            type='url'
            placeholder='e.g. moana.com'
          />

          <Select label='Genre' name='genre' className={formStyle.select}>
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
            type='text'
            placeholder='Type movie overview here'
          />

          <TextInput
            className={formStyle.input}
            label='Runtime'
            name='runtime'
            type='text'
            placeholder='Movie runtime'
          />

          <div className={formStyle.buttonWrapper}>
            <Button className={resetButton.resetButton} type='reset' name='Reset'/>
            <Button className={primaryButton.primaryButton} type='submit' name='Submit'/>
          </div>
        </Form>
      </Formik>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMovie: (values) => dispatch(addMovie(values)),
    editMovie: (values) => dispatch(editMovie(values))
  }
}


export default connect(null, mapDispatchToProps)(MovieForm);
