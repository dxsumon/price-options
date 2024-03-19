import PropTypes from 'prop-types';
const Gym = ({gym}) => {
    const {name,location,facilities,price} = gym;
    return (
        <div className="bg-rose-500 text-white p-5  rounded-xl">
            <h1 className="text-2xl font-bold">Name: {name}</h1>
            <h2>Location: {location}</h2>
            <p>Facilities: {facilities}</p>
            <p>Price: {price}</p>
        </div>
    );
};

Gym.propTypes = {
    gym: PropTypes.object
}

export default Gym;