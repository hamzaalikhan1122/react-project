export async function fetchAuth(data) {
  const authData = {
    email: data.email,
    password: data.password,
  };

  const response = await fetch(`http://localhost:8080/${data.mode}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(authData),
  });
  return response;
}
