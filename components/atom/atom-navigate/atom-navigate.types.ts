import type { PropType } from 'vue'

import type { AtomIconType } from '~/components/atom/atom-icon/atom-icon.type'

export const atomNavigateApperanceType = ['primary'] as const

export type AtomNavigateApperanceType =
    (typeof atomNavigateApperanceType)[number]

export const atomNavigateProps = {
    apperrance: {
        type: String as PropType<AtomNavigateApperanceType>,
        validator: (value: AtomNavigateApperanceType) => {
            return atomNavigateApperanceType.includes(value)
        },
        default: atomNavigateApperanceType[0],
    },
    iconLeft: {
        type: [String, null as unknown] as PropType<AtomIconType | null>,
        default: null,
    },
    iconRight: {
        type: [String, null as unknown] as PropType<AtomIconType | null>,
        default: null,
    },
}
export const atomNavigatePropsLikeButton = {
    disabled: {
        type: Boolean as PropType<boolean>,
        default: false,
    },
    loading: {
        type: Boolean as PropType<boolean>,
        default: false,
    },
    type: {
        type: String as PropType<'button' | 'submit' | 'clear'>,
        default: 'button',
    },
}
export const atomNavigatePropsLikeNuxtLink = {
    to: {
        type: [String, null as unknown] as PropType<string | null>,
        default: null,
    },
}
