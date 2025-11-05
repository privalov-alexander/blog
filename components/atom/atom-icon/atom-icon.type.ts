export const atomIconNameArray = ['error', 'profile'] as const

export type AtomIconType = (typeof atomIconNameArray)[number]
