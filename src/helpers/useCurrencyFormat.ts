import { useEffect, useState } from 'react'

// hàm xử lý định dạng tiền tệ
export const useCurrencyFormat = (amount: any) => {
  const [formattedAmount, setFormattedAmount] = useState('')
  useEffect(() => {
    setFormattedAmount(amount.toLocaleString('vi-VN'))
  }, [amount])
  return formattedAmount
}
