import { useEffect, useState } from 'react'

export const usePasswordValidation = (form: any) => {
  const [passwordChanged, setPasswordChanged] = useState(false)

  // Sử dụng useEffect để theo dõi sự thay đổi của trường Password và validate lại Confirm Password
  useEffect(() => {
    if (passwordChanged) {
      form.validateFields(['confirm'])
      setPasswordChanged(false) // đánh dấu validate confirm success
    }
  }, [passwordChanged, form.getFieldValue('password')])

  const handlePasswordChange: any = () => {
    setPasswordChanged(true) // đánh dấu true đễ nhận biết sự thay đổi của password
  }

  return [handlePasswordChange]
}
