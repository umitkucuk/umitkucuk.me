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

      gray50?: string
      gray100?: string
      gray200?: string
      gray300?: string
      gray400?: string
      gray500?: string
      gray600?: string
      gray700?: string
      gray800?: string
      gray900?: string
    }
  }
}
