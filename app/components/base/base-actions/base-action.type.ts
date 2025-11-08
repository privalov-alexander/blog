import type { AtomIconType } from '~/components/atom/atom-icon/atom-icon.type'

export interface BaseActionProps {
    to?: string
    type?: 'button' | 'submit'
    disabled?: boolean
    leftIcon?: AtomIconType
    rightIcon?: AtomIconType
}
