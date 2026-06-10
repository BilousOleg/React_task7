import { createSlice } from '@reduxjs/toolkit';
import userImage from './../../assets/images/userImage.png';

// Оскільки в завданні вказано зробити стан для однієї картки, то потенційну можливість робити їх декілька створювати не став (можливо, картка повинна бути однією)
const initialState = {
  firstName: 'Test',
  lastName: 'Test',
  userImage,
  isFavourite: false,
};

const userSlice = createSlice({
  initialState,
  name: 'userCard',
  reducers: {
    // Змінюю значення одразу в reducer, без передачі зовнішніх даних через action.payload
    toggleFavourite: state => {
      state.isFavourite = !state.isFavourite;
      console.log(state.isFavourite);
    },
  },
});

const { reducer, actions } = userSlice;

export const { toggleFavourite } = actions;

export default reducer;
