// components/App.js
// by Gavin Smith
// CS4242 Assignment 04
import { Component } from 'react'

function itemClasses(href, router) {
  let clist = ['item']
  if (router.pathname === href) {
    clist.push('active')
  }
  return clist.join(' ')
}

function App({children, router}) {
  return (
    <div>
      {children}
    </div>
  )
}

export default App
