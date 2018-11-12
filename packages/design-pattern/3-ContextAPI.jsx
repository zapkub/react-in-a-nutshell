import React from 'react'
const cowsay = require('cowsay')
const CowSayContext = React.createContext(null)

export class CowProvider extends React.Component {
  constructor() {
    super()
    this.say = this.say.bind(this)
    this.think = this.think.bind(this)
  }

  think(text) {
    return cowsay.think({
      e: 'O_o',
      T: 'U',
      text: text,
      wrap: false
    })
  }

  say(text) {
    return cowsay.say({
      e: 'O_o',
      T: 'U',
      text: text,
      wrap: false
    })
  }

  render() {
    return (
      <CowSayContext.Provider value={{ say: this.say, think: this.think }}>
        {this.props.children}
      </CowSayContext.Provider>
    )
  }
}
CowProvider.defaultProps = {
  actionName: 'say'
}

export const CowConsumer = props => {
  return (
    <CowSayContext.Consumer>
      {cow => {
        if (!cow) {
          throw new Error(
            'cow not found, please make sure you use CowSayConsumer inside CowSayProvider'
          )
        }
        return props.children(cow)
      }}
    </CowSayContext.Consumer>
  )
}
