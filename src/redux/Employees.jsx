import { createSlice } from "@reduxjs/toolkit";
import nhanVien from '../data/ListNhanVien';
export const empSlice = createSlice({
    name: "emps",
    initialState: { value: nhanVien },
    //Du lieu ban dau cua state se la nguyen cai list cua ListOfUsers
    reducers: {
        addEmp: (state, action) => { // Write code for addUser function
            state.value.push(action.payload);
        },
        // updateEmpName: (state, action) => { // Write code for updateUsername function
        //     state.value.map((emp) => {
        //         if (emp.id === action.payload.id) {
        //             emp.username = action.payload.username;
        //         }
        //     });
        // },
        // deleteEmp: (state, action) => { // Write code for deleteUser fuction
        //     state.value.filter((emp) => emp.id !== action.payload.id);
        // },
    }
}
);
export default empSlice.reducer;
export const { addEmp } = empSlice.actions;
