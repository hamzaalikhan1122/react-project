import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchEventById,
  fetchAllEvents,
  removeEventById,
  updateEvent,
} from "./eventsActions";
const initialState = {
  events: [],
  status: "idle",
  selectedEvent: null,
  error: null,
};

export const fetchAllEventsAsync = createAsyncThunk(
  "event/fetchAllEvents",
  async () => {
    const response = await fetchAllEvents();
    return response;
  }
);

export const fetchEventByIdAsync = createAsyncThunk(
  "event/fetchEventById",
  async (id) => {
    const response = await fetchEventById(id);
    // Assuming the response is { data: eventData }
    return response.event; // Correctly access the event data
  }
);
export const updateEventAsync = createAsyncThunk(
  "event/updateEvent",
  async (event) => {
    await updateEvent(event);
    // Assuming the response is { data: eventData }
    return event.data; // Correctly access the event data
  }
);

export const removeEventAsync = createAsyncThunk(
  "event/removeEventById",
  async (id) => {
    await removeEventById(id);
    return id;
  }
);

export const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllEventsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllEventsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.events = action.payload.events;
      })
      .addCase(fetchAllEventsAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(updateEventAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateEventAsync.fulfilled, (state, action) => {
        state.status = "idle";
        const newEvent = action.payload;
        const existingEvent = state.events.find(
          (event) => event.id === newEvent.id
        );
        if (!existingEvent) {
          state.events = [...state.events, newEvent];
        } else {
          existingEvent.title = action.payload.title;
          existingEvent.date = action.payload.date;
          existingEvent.image = action.payload.image;
          existingEvent.description = action.payload.description;
        }
      })
      .addCase(updateEventAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchEventByIdAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchEventByIdAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.selectedEvent = action.payload;
      })
      .addCase(fetchEventByIdAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(removeEventAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(removeEventAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.events = state.events.filter(
          (event) => event.id !== action.payload
        ); // Ensure action.payload is the ID
      })
      .addCase(removeEventAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectEvents = (state) => state.events.events;
export const selectEventById = (state) => state.events.selectedEvent;
export const selectIsLoadingEvent = (state) => state.events.status;

export default eventsSlice.reducer;
