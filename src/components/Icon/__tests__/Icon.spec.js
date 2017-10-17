import React from 'react'
import { mount } from 'enzyme'
import Icon from '../index'

describe('Icon', () => {
  it('Icon render', () => {
    mount(<Icon icon="fa-fa" />)
  })

  it('Snapshot Icon', () => {
    const wrapper = mount(<Icon icon="fa-fa" />)
    expect(wrapper).toMatchSnapshot()
  })
})
