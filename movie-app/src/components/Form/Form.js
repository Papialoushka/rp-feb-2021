import {Formik, useFormik, Form, useField} from 'formik';
import {filterCriteria} from './../../data';
import Button from '../Button';
import primaryButton from './../../styles/PrimaryButton.Module.scss';
import resetButton from './../../styles/ResetButton.Module.scss';
import formStyle from './Form.Module.scss'

const TextInput = ({label, ...props}) => {
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

const Select = ({label, ...props}) => {
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

const MovieForm = (props) => {
  if (props.modalTitle === 'delete') {
    return null;
  }

  return (
    <>
      <Formik
        initialValues={{
          movieId: '',
          title: '',
          releaseDate: '',
          movieUrl: '',
          genre: '',
          overview: '',
          runtime: '',
        }}
        onSubmit={(values, {setSubmitting}) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className={formStyle.form}>
          <TextInput
            className={formStyle.disabled}
            label='Movie ID'
            name='movieId'
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
            name='movieUrl'
            type='url'
            placeholder='e.g. moana.com'
          />

          <Select label='Genre' name='genre' className={formStyle.select}>
            <option value=''>Select Genre</option>
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

export default MovieForm;
