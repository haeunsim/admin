import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedTest: null,
  showSubjectList: false,
  searchParams: {
    publisher: "",
    grade: "",
    semester: "",
    subject: "",
  },
};

const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    setSelectedTest: (state, action) => {
      state.selectedTest = action.payload;
    },
    setShowSubjectList: (state, action) => {
      state.showSubjectList = action.payload;
    },
    setSearchParams: (state, action) => {
      state.searchParams = action.payload;
    },
  },
});

export const { setSelectedTest, setShowSubjectList, setSearchParams } =
  testSlice.actions;

export default testSlice.reducer;
