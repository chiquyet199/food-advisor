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
    startValue: PropTypes.number,
    delay: PropTypes.number,
    duration: PropTypes.number,
    animationOnMount: PropTypes.bool,
    getAnimatedStyle: PropTypes.func.isRequired,
    children: PropTypes.arrayOf(PropTypes.node).isRequired,
  }

  static defaultProps = {
    delay: 0,
    startValue: 0,
    duration: 400,
    animationOnMount: true,
  }

  componentDidMount() {
    this.props.animationOnMount && setTimeout(this.animate, this.props.delay)
  }

  animate = () => {
    const toAnimationObject = animatedValue => Animated.spring(animatedValue, { duration: this.props.duration, toValue: 1 })
    const animations = this.animatedValues.map(toAnimationObject)
    Animated.stagger(100, animations).start()
  }

  newAnimatedValue = (item, idx) => {
    this.animatedValues[idx] = new Animated.Value(this.props.startValue)
  }

  initialAnimatedValue = () => {
    this.props.children.forEach(this.newAnimatedValue)
  }

  toAnimatedElement = (el, idx) => (
    <Animated.View key={idx} style={this.props.getAnimatedStyle(this.animatedValues[idx])}>
      {el}
    </Animated.View>
  )

  render() {
    return <View {...this.props}>{this.props.children.map(this.toAnimatedElement)}</View>
  }
}

export default TrailingAnimation
