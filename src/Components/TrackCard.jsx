import { motion } from 'framer-motion';

function TrackCard({ car, race }) {
  const getAnimationDuration = () => {
    if (car.hp >= 1500) return 8;
    if (car.hp >= 1000) return 9;
    if (car.hp >= 780) return 9.5;
    if (car.hp >= 682) return 10;
    if (car.hp >= 670) return 10.5;
    if (car.hp >= 657) return 11;
    if (car.hp >= 602) return 11.5;
    if (car.hp >= 600) return 12;
    if (car.hp >= 518) return 13;
    return 14;
};

    return (
        <motion.div
            animate={{ x: race ? "92%" : null }}
            transition={{ type: "tween", duration: getAnimationDuration(), ease: "linear"}}
            className='trackCard'
        >
            <img src={car.image[0]} alt={car.name} />
        </motion.div>
    );
}

export default TrackCard;