import PropTypes from 'prop-types';

const Link = ({route}) => {
    const {name,path} = route;
    return (
        <div>
            <li className='hover:bg-rose-500 px-6'><a href={path}>{name}</a></li>
        </div>
    );
};

Link.propTypes = {
    route: PropTypes.object
}
export default Link;