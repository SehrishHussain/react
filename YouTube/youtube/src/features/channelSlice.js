import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchChannelData = createAsyncThunk('channel/fetachChannelData', async () => {
    const response = await axios.get('http://localhost:8080/api/v1/public/youtube/videos?page=1&limit=10&query=javascript&sortBy=keep%20one%3A%20mostLiked%20%7C%20mostViewed%20%7C%20latest%20%7C%20oldest')
        return response.data.data.data;
    
});

const channelSlice = createSlice({
    name: 'channel',
    initialState: {
        data: null,
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchChannelData.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchChannelData.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.data = action.payload;
        })
        .addCase(fetchChannelData.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });
    },
});

export default channelSlice.reducer;