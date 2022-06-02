import { createSlice } from '@reduxjs/toolkit';
import defaultImg from '../../assets/minimal_avatar.jpg';

const name = 'Admin';

const initialState = {
  admin:
    
      {
        id: 1,
        name: 'Abo',
        avatar: defaultImg,
        phone: '+30-2106019311',
        country: 'United Arab Emirates',
        city: 'Chalandri',
        email: 'a@mail.ru',
        password:'dummyPass',
        address: 'Keas 69 Str.',
        state: 'Chalandri',
        zip: '00222',
        about: 'Nullam cursus lacinia erat. Vestibulum suscipit nulla quis orci. Fusce a quam. Morbi mollis tellus ac sapien. Praesent nonummy mi in odio.'

      }
    

};


const adminSlice = createSlice({
  name,
  initialState,
  reducers: {
    setAdmin(state, { payload }) {
      state.admin = payload;
    },
  },

});

export const { setAdmin } = adminSlice.actions;


export const selectAdmin = (state) => state.admin.admin;


export default adminSlice.reducer;

