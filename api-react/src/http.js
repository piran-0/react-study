export async function fetchAvailablePlaces() {
  const res = await fetch("http://localhost:3000/places");
  const resData = await res.json();

  if (!res.ok) {
    throw new Error("fail to fetch places");
  }

  return resData.places;
}

export async function updateUserPlaces(places) {
  const res = await fetch("http://localhost:3000/user-places", {
    method: "PUT",
    body: JSON.stringify({ places }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const resData = await res.json();

  if (!res.ok) {
    throw new Error("Fail to update user data");
  }

  return resData.message;
}
