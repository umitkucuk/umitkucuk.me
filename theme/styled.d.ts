import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      primary50?: string
      primary100?: string
      primary200?: string
      primary300?: string
      primary400?: string
      primary500?: string
      primary600?: string
      primary700?: string
      primary800?: string
      primary900?: string
    }
  }
}
