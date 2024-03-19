import { useEffect, useState,} from "react";
import Gym from "../Gym/Gym";
// import PropTypes from 'prop-types';
import { MagnifyingGlass } from 'react-loader-spinner'


const Gyms = () => {
    const [gyms, setGyms] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('gym.json')
            .then(res => res.json())
            .then(data => setGyms(data))
            setLoading(false)
    }, []);
    return (
        <div>
            {
                loading && <div className="flex justify-center items-center">
                <MagnifyingGlass
                    visible={true}
                    height="30%"
                    width="30%"
                    ariaLabel="magnifying-glass-loading"
                    wrapperStyle={{}}
                    wrapperClass="magnifying-glass-wrapper"
                    glassColor="#c0efff"
                    color="#e15b64"
                />
                </div>
            }
            <h1 className="text-3xl text-center my-5">Our Gym Facilities</h1>
            <div className={`grid md:grid-cols-3 justify-center item-center gap-5 ${loading && 'hidden'}`}>
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