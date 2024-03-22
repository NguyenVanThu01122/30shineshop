export const validatePhone = [
  {
    required: true,
    message: 'Vui lòng nhập số điện thoại !'
  },
  () => ({
    validator(_: any, value: string) {
      if (!value || value.trim() === '') {
        // Kiểm tra nếu giá trị là rỗng hoặc chỉ chứa khoảng trắng
        return Promise.resolve() // Trả về Promise giải quyết nếu không có lỗi
      } else {
        const phoneRegex = /^(03[2-9]|05[6-9]|07[0-9]|08[1-9]|09[0-9])[0-9]{7}$/ // // Sử dụng biểu thức chính quy để kiểm tra định dạng số điện thoại
        if (phoneRegex.test(value)) {
          return Promise.resolve()
        } else {
          return Promise.reject(new Error('Vui lòng nhập đúng định dạng số điện thoại!'))
        }
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
      if (!value || value.trim() === '') {
        return Promise.resolve()
      } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ // regex kiểm tra định dạng email
        if (emailRegex.test(value) || value === '') {
          return Promise.resolve()
        } else {
          return Promise.reject(new Error('Vui lòng nhập đúng định dạng !'))
        }
      }
    }
  })
]

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
    min: 6,
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
