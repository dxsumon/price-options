import PropTypes from 'prop-types';
const Gym = ({gym}) => {
    const {name,location,facilities,price} = gym;
    return (
        <div className="bg-rose-500 text-white p-5 flex flex-col justify-center rounded-xl">
            <h1 className="text-2xl font-bold">Name: {name}</h1>
            <h2>Location: {location}</h2>
            <p>Facilities: {facilities.map((item,id)=> <li key={id}>{item}</li>)}</p>
            <p className='flex-grow'>Price: {price}</p>
            <button className='border-2 border-white px-5 py-2 rounded-lg backdrop-blur-sm hover:bg-rose-900 w-[30%]'>Buy Now</button>
        </div>
    );
};

Gym.propTypes = {
    gym: PropTypes.object
}

export default Gym;