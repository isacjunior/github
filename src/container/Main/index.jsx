import React, { Component } from 'react'
import Hero from '../../components/Header'
import CardTitle from '../../components/CardTitle'

class Main extends Component {

  render() {
    return (
      <main>
        <Hero />
        <div className="container">
          <CardTitle title="Repositories Javascript" />
        </div>
      </main>
    )
  }
}

export default Main
