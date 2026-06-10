import { createSlice } from '@reduxjs/toolkit';
import userImage from './../../assets/images/userImage.png';

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
    toggleFavourite: state => {
      state.isFavourite = !state.isFavourite;
      console.log(state.isFavourite);
    },
  },
});

const { reducer, actions } = userSlice;

export const { toggleFavourite } = actions;

export default reducer;
