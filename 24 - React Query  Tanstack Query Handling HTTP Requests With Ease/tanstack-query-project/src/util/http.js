import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

export async function fetchEvents({ signal, searchTerm, max }) {
  let url = `${baseUrl}/events`;

  if (searchTerm && max) {
    url += "?search=" + searchTerm + "&max=" + max;
  } else if (searchTerm) {
    url += "?search=" + searchTerm;
  } else if (max) {
    url += "?max=" + max;
  }

  const response = await fetch(url, { signal });

  if (!response.ok) {
    let error = new Error("An error occurred while fetching the events");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const { events } = await response.json();

  return events;
}

export async function fetchImages({ signal }) {
  const response = await fetch(`${baseUrl}/events/images`, {
    signal,
  });

  if (!response.ok) {
    const error = new Error("An error occurred while fetching the images");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const { images } = await response.json();
  return images;
}

export async function createNewEvent(eventData) {
  const response = await fetch(`${baseUrl}/events`, {
    method: "POST",
    body: JSON.stringify(eventData),
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) {
    const error = new Error("An error occurred while creating the event");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const { event } = await response.json();

  return event;
}

export async function fetchEvent({ signal, id }) {
  const response = await fetch(`${baseUrl}/events/${id}`, {
    signal,
  });

  if (!response.ok) {
    const error = new Error(
      "An error occurred while fetching Event with id: " + id
    );
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const { event } = await response.json();
  return event;
}

export async function deleteEvent({ id }) {
  console.log(id);
  const response = await fetch(`${baseUrl}/events/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    const error = new Error(
      "An error occurred while deleting Event with id:" + id
    );
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  return response.json();
}

export async function updateEvent({ id, eventData }) {
  console.log(id);
  const response = await fetch(`${baseUrl}/events/${id}`, {
    method: "PUT",
    body: JSON.stringify({ event: eventData }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const error = new Error(
      "An error occurred while updating Event with id:" + id
    );
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }
  if (response) {
    const { event } = await response.json();
    return event;
  }
}
