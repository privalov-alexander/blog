import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it } from 'vitest'
import '~/tests/mocks'

import AtomIcon from '~/components/atom/atom-icon/AtomIcon.vue'

import AtomNavigate from './AtomNavigate.vue'

const DEFAULT_SLOT = 'Default slot'
describe('AtomNavigate', () => {
    let wrapper: any

    beforeEach(() => {
        wrapper = mount(AtomNavigate, {
            slots: {
                default: DEFAULT_SLOT,
            },
            global: {
                stubs: {
                    NuxtLink: true,
                },
            },
        })
    })

    it('Корректная отрисовка с использованием реквизитов по умолчанию', async () => {
        expect(wrapper.element).toMatchSnapshot()
        await wrapper.trigger('click')
        expect(wrapper.emitted('click')).toBeTruthy()
    })
    it('Корректная отрисовка слота', () => {
        expect(wrapper.text().includes(DEFAULT_SLOT)).toBeTruthy()
    })

    it('Отрисовка компонента как "button", когда не передана ссылка', () => {
        expect(wrapper.find('button').exists()).toBe(true)
    })

    it('Отрисовка компонента как "NuxtLink", когда передана ссылка', async () => {
        await wrapper.setProps({ to: '/path' })
        expect(wrapper.findComponent({ name: 'NuxtLink' }).exists()).toBe(true)
    })

    it('Проверка наличия "iconLeft"', async () => {
        await wrapper.setProps({ iconLeft: 'profile' })
        const icon = wrapper.findAllComponents(AtomIcon).at(0)
        expect(icon.exists()).toBe(true)
        expect(icon.props('name')).toBe('profile')
    })
    it('Проверка наличия "iconRight"', async () => {
        await wrapper.setProps({ iconRight: 'profile' })
        const icon = wrapper.findAllComponents(AtomIcon).at(0)
        expect(icon.exists()).toBe(true)
        expect(icon.props('name')).toBe('profile')
    })

    it('Проверка на наличине "disabled"', async () => {
        await wrapper.setProps({ disabled: true })
        expect(wrapper.attributes('disabled')).toBeDefined()
        await wrapper.trigger('click')
    })

    it('Проверка на наличие индикатора загрузки', async () => {
        await wrapper.setProps({ loading: true })
        expect(wrapper.emitted('click')).toBeFalsy()
        expect(wrapper.find('.loading-animation').exists()).toBe(true)
    })
})
