import { useNavigate } from 'react-router-dom'

function CarCard({ car }) {
  const navigate = useNavigate();
  return (
    <div className='car-card' onClick={() => navigate(`/specs/${car.id}`)}>
      <h2>{car.make}</h2>
      <img src={car.image[0]} alt="Car" />
      <div>
        <h3>Model: {car.model}</h3>
        <h3>Year: {car.year}</h3>
        <h3>${car.cost}</h3>
        <h3>HP: {car.hp}</h3>
      </div>
    </div>
  )
}

export default CarCard