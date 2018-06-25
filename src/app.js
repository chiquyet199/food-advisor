import React from 'react'
import { Provider } from 'react-redux'

import store from 'store'
import routes from 'configs/routes'
import { Navigation } from 'react-native-navigation'
import { registerScreens } from './routingRegister'

class App extends React.Component {
  constructor(props) {
    super(props)
    registerScreens(store, Provider)
    this.startApp()
  }

  startApp = () => {
    Navigation.events().registerAppLaunchedListener(() => {
      Navigation.setRoot({
        root: {
          component: {
            name: routes.Home,
          },
        },
      })
    })
  }
}

export default App
