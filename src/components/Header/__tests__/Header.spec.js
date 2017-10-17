import React from 'react'
import { mount } from 'enzyme'
import Header from '../index'

describe('Header', () => {
  it('Header render', () => {
    mount(<Header />)
  })

  it('Snapshot Header', () => {
    const wrapper = mount(<Header />)
    expect(wrapper).toMatchSnapshot
  })
})