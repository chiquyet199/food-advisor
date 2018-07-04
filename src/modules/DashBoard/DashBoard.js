import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ScrollView, View, StatusBar } from 'react-native'

import routes from 'configs/routes'
import { navigate } from 'services/navigation'
import { fetchData } from 'actions/data.actions'
import { getLoadingStatus } from 'store/selectors/common.selectors'
import { getGreetText } from 'store/selectors/data.selectors'
import { Header, Banner } from 'components'
import { CategoryFilterSlider } from 'modules/DashBoard/components'

class DashBoard extends Component {
  static propTypes = {
    fetchData: PropTypes.func,
  }

  static defaultProps = {
    fetchData: null,
  }

  componentDidMount() {
    this.props.fetchData()
  }

  goToAbout = () => {
    navigate(routes.About)
  }

  get Header() {
    return (
      <View>
        <Banner />
        <View style={{ position: 'absolute', top: 16, left: 0, right: 0 }}>
          <Header />
        </View>
      </View>
    )
  }

  get CategoryFilterSlider() {
    return <CategoryFilterSlider />
  }

  get TopTenRestaurants() {
    return <View />
  }

  get BestDealsOfTheDay() {
    return <View />
  }

  render() {
    return (
      <ScrollView style={{ marginTop: -20 }}>
        <StatusBar barStyle="light-content" />
        {this.Header}
        {this.CategoryFilterSlider}
        {this.TopTenRestaurants}
        {this.BestDealsOfTheDay}
      </ScrollView>
    )
  }
}

const mapStateToProps = state => ({
  isLoading: getLoadingStatus(state),
  greetText: getGreetText(state),
})

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(fetchData()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DashBoard)