import React from 'react'

const SingletonStoreContext = React.createContext({})


export const StoreProvider = ({ initialValue, children }) => {
  const [singletonState, setSingletonState] = React.useState(initialValue)
  const value = { state: singletonState, setState: setSingletonState }
  return (
    <SingletonStoreContext.Provider value={value}>
      {children}
    </SingletonStoreContext.Provider>
  )
}

export const StoreConsumer = SingletonStoreContext.Consumer

StoreProvider.defaultProps = {
  initialValue: {}
}

function DoPower(x, y) {
  return Math.pow(x, y)
}

export const Power = ({ exponent, children }) => {
  return (
    <SingletonStoreContext.Consumer>
      {({ state, setState }) => {
        return children(() => {
          setState(DoPower(state, exponent))
        })
      }}
    </SingletonStoreContext.Consumer>
  )
}
