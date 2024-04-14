import { useState } from 'react';
import { motion } from 'framer-motion';
import TrackCard from './TrackCard';

function CompareTrack({ cars }) {
    const [race, setRace] = useState(false);

    function handleRace() {
        setRace(!race);  
    }

    const mappedTrack = cars.map(car => (
        <TrackCard key={car.id} car={car} race={race} />
    ));

    return (
        <div className='compareTrack' style={{ overflow: 'hidden' }}> {}
            <h1>CompareTrack</h1>
            <br />
            <motion.button
                id="raceBtn"
                onClick={handleRace}
            >
                Race
            </motion.button>
            {mappedTrack}
        </div>
    );
}

export default CompareTrack;