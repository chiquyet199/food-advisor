import React from 'react'
import { Provider } from 'react-redux'
import EStyleSheet from 'react-native-extended-stylesheet'

import store from 'store'
import routes from 'configs/routes'
import styleVariables from 'assets/styles/variables'
import { Navigation } from 'react-native-navigation'
import { registerScreens } from './routingRegister'

EStyleSheet.build(styleVariables)

class App extends React.Component {
  constructor(props) {
    super(props)
    registerScreens(store, Provider)
    this.startApp()
  }

  startApp = () => {
    Navigation.startSingleScreenApp({
      screen: {
        screen: routes.Home,
        title: 'Navigation Bootstrap',
      },
    })
  }
}

export default App