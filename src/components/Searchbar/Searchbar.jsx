import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Formik, Form, Field } from 'formik';
import { ReactComponent as Icon } from '../../icons/icon.svg';
import { Container } from '../App/Container.styled';
import PropTypes from 'prop-types';

import {
  SearchbarBox,
  FormStyles,
  InputStyles,
  LabelStyles,
  ButtonBox,
} from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  const hendleSubmit = (values, actions) => {
    if (values.inputValue === '') {
      Notify.failure('Please, enter something for me to find!');
    } else {
      onSubmit(values);
    }
  };
  return (
    <SearchbarBox>
      <Container>
        <Formik initialValues={{ inputValue: '' }} onSubmit={hendleSubmit}>
          <Form>
            <FormStyles>
              <LabelStyles>
                <Field
                  name="inputValue"
                  as={InputStyles}
                  placeholder="Search images and photos"
                  autocomplete="off"
                />
              </LabelStyles>
              <ButtonBox type="submit">
                <Icon width="20" height="20" />
              </ButtonBox>
            </FormStyles>
          </Form>
        </Formik>
      </Container>
    </SearchbarBox>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
