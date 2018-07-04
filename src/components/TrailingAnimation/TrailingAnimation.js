import React from 'react'
import PropTypes from 'prop-types'
import { View, Animated } from 'react-native'

class TrailingAnimation extends React.Component {
  constructor(props) {
    super(props)
    this.animatedValues = []
    this.initialAnimatedValue()
  }

  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.node).isRequired,
    startValue: PropTypes.number,
    getAnimatedStyle: PropTypes.func.isRequired,
  }

  static defaultProps = {
    startValue: 0,
  }

  newAnimatedValue = (item, idx) => {
    this.animatedValues[idx] = new Animated.Value(this.props.startValue)
  }

  initialAnimatedValue = () => {
    this.props.children.forEach(this.newAnimatedValue)
  }

  toAnimatedElement = (el, idx) => (
    <Animated.View style={this.props.getAnimatedStyle(this.animatedValues[idx])}>{el}</Animated.View>
  )

  render() {
    return <View {...this.props}>{this.props.children.map(this.toAnimatedElement)}</View>
  }
}

export default TrailingAnimation