import {
  ContactListStyled,
  ContactItemStyled,
  ButtonStyled,
} from './ContactList.styled';

export const ContactList = ({ contact, onDelete }) => {
  return (
    <ContactListStyled>
      {contact.map(({ id, name, number }) => (
        <ContactItemStyled key={id}>
          <p>
            {name}: {number}
          </p>
          <ButtonStyled type="button" onClick={() => onDelete(id)}>
            Delete
          </ButtonStyled>
        </ContactItemStyled>
      ))}
    </ContactListStyled>
  );
};
