import PropTypes from 'prop-types';

const MyComponent =({name, childern}) => {
    return(...);
}

MyComponent.defaultProps ={
    name:'기본 이름'
};

MyComponent.propTypes={
    name:PropTypes.string
};

export default MyComponent;