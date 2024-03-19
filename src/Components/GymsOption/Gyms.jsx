import { useEffect, useState } from "react";
import Gym from "../Gym/Gym";
// import PropTypes from 'prop-types';

const Gyms = () => {
    const [gyms, setGyms] = useState([])

    useEffect(() => {
        fetch('gym.json')
            .then(res => res.json())
            .then(data => setGyms(data))
    }, []);
    return (
        <div>
            <h1 className="text-3xl text-center my-5">Our Gym Facilities</h1>
            <div className="grid md:grid-cols-3 justify-center item-center gap-5">
                {
                    gyms.map((gym) => <Gym key={gym.id} gym={gym}></Gym>)
                }
            </div>
        </div>
    );
};

// FoodItems.propTypes = {
//     foods: PropTypes.object
// }

export default Gyms;