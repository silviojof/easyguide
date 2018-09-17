import PropTypes from 'prop-types'

const withDefaultProps = Component => {
  const propTypes = {
    name: PropTypes.string,
    color: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    className: PropTypes.string,
  }

  const defaultProps = {
    width: 25,
    height: 25,
    color: '#000000',
  }

  Component.propTypes = propTypes
  Component.defaultProps = defaultProps

  return Component
}

export default withDefaultProps
