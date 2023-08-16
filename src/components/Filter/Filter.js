import { LabelStyled, FilterStyled } from './Filter.styled';

export const Filter = ({ filter, onChangeFilter }) => {
  return (
    <FilterStyled>
      <LabelStyled>
        <h3>Find contacts by name</h3>
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={onChangeFilter}
        />
      </LabelStyled>
    </FilterStyled>
  );
};
