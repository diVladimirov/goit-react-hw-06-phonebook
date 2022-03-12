import { FilterWrapper, FilterLabel, FilterInput } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { updateFilter } from 'redux/contactsSlice';

export default function Filter() {
  const dispatch = useDispatch();

  const onChange = event => {
    dispatch(updateFilter(event.currentTarget.value));
  };

  return (
    <FilterWrapper>
      <FilterLabel htmlFor="filter">Find contacts by name</FilterLabel>
      <div>
        <FilterInput
          type="text"
          name="filter"
          onChange={onChange}
          placeholder="Input name to find"
        />
      </div>
    </FilterWrapper>
  );
}
