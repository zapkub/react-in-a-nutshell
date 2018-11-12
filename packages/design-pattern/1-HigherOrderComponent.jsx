import React from 'react'
export function InjectCat(Component) {
  return () => {
    return <Component cat="🐈" />
  }
}
