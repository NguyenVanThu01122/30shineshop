import { t } from 'i18next'

export const validatePhone = () => {
  return [
    {
      required: true,
      message: t('enterPhone')
    },
    () => ({
      validator(_: any, value: string) {
        if (!value || value.trim() === '') {
          return Promise.resolve()
        } else {
          const phoneRegex = /^(03[2-9]|05[6-9]|07[0-9]|08[1-9]|09[0-9])[0-9]{7}$/
          if (phoneRegex.test(value)) {
            return Promise.resolve()
          } else {
            return Promise.reject(new Error(t('correctPhoneFormat')))
          }
        }
      }
    })
  ]
}

export const validateEmail = () => {
  return [
    {
      required: true,
      message: t('enterEmail')
    },
    () => ({
      validator(_: any, value: string) {
        if (!value || value.trim() === '') {
          return Promise.resolve()
        } else {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
          if (emailRegex.test(value) || value === '') {
            return Promise.resolve()
          } else {
            return Promise.reject(new Error(t('correctFormat')))
          }
        }
      }
    })
  ]
}

export const validateName = () => {
  return [
    {
      required: true,
      message: t('enterName')
    },
    {
      min: 3,
      message: t('nameLength')
    },
    {
      max: 30,
      message: t('nameLength')
    }
  ]
}

export const validateBirthday = () => {
  return [{ required: true, message: t('enterBirthday') }]
}

export const validateAddress = () => {
  return [{ required: true, message: t('enterAddress') }]
}

export const validateComment = () => {
  return [
    {
      required: true,
      message: t('enterComment')
    },
    {
      min: 3,
      message: t('commentLength')
    }
  ]
}

export const validatePassword = () => {
  return [
    {
      required: true,
      message: t('enterPassword')
    },
    () => ({
      validator(_: any, value: string) {
        if (!value) {
          return Promise.resolve()
        } else if (value.length < 6) {
          return Promise.reject(new Error(t('Please enter at least 6 characters')))
        } else {
          return Promise.resolve()
        }
      }
    })
  ]
}

export const validateConfirmPassword = () => {
  return [
    {
      required: true,
      message: t('PLEASE_CONFIRM_PASSWORD')
    },
    ({ getFieldValue }: { getFieldValue: any }) => ({
      validator(_: any, value: string) {
        if (!value || getFieldValue('password') === value) {
          return Promise.resolve()
        }
        return Promise.reject(new Error(t('The two passwords that you entered do not match')))
      }
    })
  ]
}

export const validateGender = () => {
  return [{ required: true, message: t('selectGender') }]
}

export const validateCheckBox = () => {
  return [
    {
      validator: (_: any, value: any) => (value ? Promise.resolve() : Promise.reject(new Error(t('confirm'))))
    }
  ]
}

export const validateContent = () => {
  return [{ required: true, message: t('enterContent') }]
}
