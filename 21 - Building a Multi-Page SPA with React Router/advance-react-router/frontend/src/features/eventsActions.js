export async function fetchAllEvents() {
  const fetchData = async () => {
    const response = await fetch("http://localhost:8080/events");

    if (!response.ok) {
      throw new Error("Fetching events failed");
    }

    const resData = await response.json();
    return resData;
  };

  try {
    const eventsData = await fetchData();
    return eventsData;
  } catch (error) {
    throw new Error(error.message || "Failed to fetch all events");
  }
}

export async function fetchEventById(id) {
  try {
    const response = await fetch(`http://localhost:8080/events/${id}`);

    if (!response.ok) {
      throw new Error("Fetching events failed");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error(
      error.message || "Failed to fetch event data with id : " + id
    );
  }
}
export async function updateEvent(eventData) {
  const { data: editData, method } = eventData;
  try {
    console.log(eventData, "API DATA");
    const response = await fetch(
      method === "PATCH"
        ? `http://localhost:8080/events/${editData?.id}`
        : "http://localhost:8080/events",
      {
        method: method,
        body: JSON.stringify(editData),
        headers: {
          "content-type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Fetching events failed");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(
      error.message || "Failed to fetch event data with id : " + eventData.id
    );
  }
}

export async function removeEventById(id) {
  console.log(id, "API");
  try {
    const response = await fetch(`http://localhost:8080/events/${id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    });

    if (!response.ok) {
      throw new Error("Deleting event failed");
    }
    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error(error.message || "Failed to remove event with id : " + id);
  }
}
