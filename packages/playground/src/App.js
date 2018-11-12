import React, { Component } from 'react'
import { InjectCat } from 'design-pattern/build/1-HigherOrderComponent'
import { CowConsumer, CowProvider } from 'design-pattern/build/3-ContextAPI'
import {
  StoreProvider,
  StoreConsumer,
  Power
} from 'state-management/build/3-SingletonStore'
import './App.css'

const CowThink = props => {
  return (
    <CowConsumer>
      {cow => {
        return props.children(cow.think)
      }}
    </CowConsumer>
  )
}

const GossipCow = () => {
  return (
    <div>
      <h1>{'GossipCow'}</h1>
      <CurrentAmount />
      <CowConsumer>
        {cow => {
          return <div dangerouslySetInnerHTML={{ __html: cow.say('Hello') }} />
        }}
      </CowConsumer>
      <CowThink>
        {cowThink => (
          <div dangerouslySetInnerHTML={{ __html: cowThink('I love bacon') }} />
        )}
      </CowThink>
    </div>
  )
}

function useAnimalEffect(store) {
  const [animal, setAnimal] = React.useState('🐈')
  React.useEffect(
    () => {
      if (store.state > 10) {
        setAnimal('🐸')
      }
      if (store.state > 20) {
        setAnimal('🦄')
      }
    },
    [store.state]
  )
  return animal
}

const DisplayResult = ({ store }) => {
  const animal = useAnimalEffect(store)
  return (
    <h1>
      {store.state} {animal}
    </h1>
  )
}
const CurrentAmount = () => {
  return (
    <StoreConsumer>{store => <DisplayResult store={store} />}</StoreConsumer>
  )
}

const IncreaseButton = ({ onClick }) => {
  React.useEffect(() => {
    onClick()
    return () => {}
    // ตรงนี้ใส่ไว้เพื่อบอกว่า อะไรเปลี่ยนแล้วให้ re render
  }, [])
  return <button onClick={onClick}>Increase</button>
}

class App extends Component {
  componentDidMount() {
    //
  }

  render() {
    return (
      <StoreProvider initialValue={0}>
        <CowProvider>
          <div>
            {this.props.cat}
            {'Hello world'}
            <GossipCow />
            <h1>State management</h1>
            <CurrentAmount />
            <StoreConsumer>
              {store => (
                <IncreaseButton
                  onClick={() => store.setState(store.state + 1)}
                />
              )}
            </StoreConsumer>
            <Power exponent={3}>
              {power => <button onClick={power}>{' ยกกำลัง3 '} </button>}
            </Power>
          </div>
        </CowProvider>
      </StoreProvider>
    )
  }
}

export default InjectCat(App)
