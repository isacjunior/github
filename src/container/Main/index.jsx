import React, { Component } from 'react'
import Hero from '../../components/Header'
import CardTitle from '../../components/CardTitle'
import Text from '../../components/Text'
import Repositories from '../Repositories'

class Main extends Component {

  render() {
    return (
      <main>
        <Hero />
        <div className="container">
          <CardTitle title="Repositories Javascript" />
          <Repositories />
        </div>
      </main>
    )
  }
}

export default Main