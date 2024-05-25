// aca va la logica de la aplicacion del Slice
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Asynchronous thunk actions
export const fetchUsers = createAsyncThunk('users/fetchUsers', async ({ page = 1, limit = 9 } = {}) => {
    const response = await fetch(`http://localhost:4000/users?_page=${page}&_limit=${limit}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    const totalCount = response.headers.get('X-Total-Count'); // Para obtener el total de usuarios
    console.log('Total Count:', totalCount);
    return { data, totalCount };
});

export const addUser = createAsyncThunk('users/addUser', async (newUser) => {
    const response = await fetch("http://localhost:4000/users", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser)
    });
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
});
export const updateUser = createAsyncThunk('users/updateUser', async (updatedUser) => {
    const response = await fetch(`http://localhost:4000/users/${updatedUser.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedUser)
    });
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
});

export const deleteUser = createAsyncThunk('users/deleteUser', async (userId) => {
    await fetch(`http://localhost:4000/users/${userId}`, { method: 'DELETE' });
    return userId;
});


export const userSlice = createSlice({
    name: 'user',
    initialState: {
        users: [], loading: false, error: null,
        totalCount: 0
    },
    reducers: {},
    // Otras acciones como eliminar usuario, actualizar usuario, etc.
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload.data;
                state.totalCount = action.payload.totalCount;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(addUser.fulfilled, (state, action) => {
                state.users.push(action.payload);
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                const index = state.users.findIndex(user => user.id === action.payload.id);
                if (index !== -1) {
                    state.users[index] = action.payload;
                }
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.users = state.users.filter(user => user.id !== action.payload);
            });
    }

});

export default userSlice.reducer;
