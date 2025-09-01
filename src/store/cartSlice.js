import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const addCartItemWithTimeout = createAsyncThunk(
  'cart/addWithTimeout',
  async (product, { dispatch }) => {
    dispatch(cartSlice.actions.addCartItem(product));
    dispatch(cartSlice.actions.showAddModal(true));
    setTimeout(() => {
      dispatch(cartSlice.actions.showAddModal(false));
    }, 2000);
  },
);

export const removeCartItemWithTimeout = createAsyncThunk(
  'cart/removeWithTimeout',
  async (id, { dispatch }) => {
    dispatch(cartSlice.actions.removeCartItem(id));
    dispatch(cartSlice.actions.showDeleteModal(true));
    setTimeout(() => {
      dispatch(cartSlice.actions.showDeleteModal(false));
    }, 2000);
  },
);

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    showModalAdd: false,
    showModalDelete: false,
  },
  reducers: {
    addCartItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeCartItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    showAddModal: (state, action) => {
      state.showModalAdd = action.payload;
    },
    showDeleteModal: (state, action) => {
      state.showModalDelete = action.payload;
    },
  },
});

export const { addCartItem, removeCartItem, showAddModal, showDeleteModal } = cartSlice.actions;

export default cartSlice.reducer;
