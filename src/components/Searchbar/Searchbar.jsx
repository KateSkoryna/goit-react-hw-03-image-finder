import { Container } from '../App/Container.styled';
import { Formik, Form, Field } from 'formik';
import { ReactComponent as Icon } from '/Users/Kate/Documents/GitHub/goit-react-hw-03-image-finder/src/icons/icon.svg';
import {
  SearchbarBox,
  FormStyles,
  InputStyles,
  LabelStyles,
  ButtonBox,
} from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  const hendleSubmit = (values, actions) => {
    onSubmit(values);
    actions.resetForm();
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

export default Searchbar;
