import { useState, useEffect } from 'react';
import Places from './Places.jsx';

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([])

  useEffect(() => {
    async function fetchPlaces() {
      const res = await fetch("http://localhost:3000/places")
      const resData = await res.json()
      setAvailablePlaces(resData.places)
    }
    fetchPlaces()
  }, []
  )

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}

