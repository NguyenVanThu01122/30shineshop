export const validateName = [
  {
    required: true,
    message: 'Vui lòng nhập tên !'
  },
  {
    min: 3,
    message: 'Vui lòng nhập từ 3 đến 16 ký tự'
  },
  {
    max: 30,
    message: 'Vui lòng nhập từ 3 đến 16 ký tự'
  }
]

export const validatePhone = [
  {
    required: true,
    message: 'Vui lòng nhập số điện thoại !'
    // validateTrigger: 'onBlur' // chỉ kiểm tra khi focus rời khỏi trường
  },
  () => ({
    validator(_: any, value: string) {
      if (value[0] !== '0' && value !== '') {
        return Promise.reject(new Error('vui lòng nhập đúng định dạng !'))
      } else if ((value.length < 10 || value.length > 10) && value !== '') {
        return Promise.reject(new Error('vui lòng nhập đúng 10 chữ số !'))
      } else {
        return Promise.resolve()
      }
    }
  })
]

export const validateEmail = [
  {
    required: true,
    message: 'Vui lòng nhập Email !'
  },
  () => ({
    validator(_: any, value: string) {
      if (value.includes('@') || value === '') {
        return Promise.resolve()
      } else {
        return Promise.reject(new Error('Vui lòng nhập đúng định dạng !'))
      }
    }
  })
]
// export const validatePassword = [{ required: true, message: 'Vui lòng nhập mật khẩu !' }]
export const validateBirthday = [{ required: true, message: 'Vui lòng nhập ngày sinh !' }]

export const validateAddress = [
  {
    required: true,
    message: 'Vui lòng nhập địa chỉ !'
  }
]

export const validateComment = [
  {
    required: true,
    message: 'Vui lòng nhập đánh giá !'
  },
  {
    min: 3,
    message: 'Vui lòng nhập từ 3 kí tự trở lên !'
  }
]

export const validatePassword = [
  {
    required: true,
    message: 'Vui lòng nhập mật khẩu !'
  }
]

export const validateConfirmPassword = [
  {
    required: true,
    message: 'Vui lòng xác nhận mật khẩu của bạn !'
  },
  (obj: any) => ({
    validator(_: any, value: string) {
      if (!value || obj.getFieldValue('password') === value) {
        return Promise.resolve()
      } else {
        return Promise.reject(new Error('Mật khẩu của bạn không khớp !'))
      }
    }
  })
]

export const validateGender = [{ required: true, message: 'Vui lòng chọn giới tính !' }]

export const validateCheckBox = [
  {
    validator: (_: any, value: any) => (value ? Promise.resolve() : Promise.reject(new Error('Vui lòng xác nhận !')))
  }
]

export const validateContent = [{ required: true, message: 'Nội dung liên hệ không được để trống!' }]