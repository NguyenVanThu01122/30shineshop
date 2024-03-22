import { useMemo } from 'react'

// hàm tính toán % sản phẩm
export const useCalculateProductPercentage = () => {
  return useMemo(() => {
    return (salePrice: number, originPrice: number) => {
      if (salePrice && originPrice) {
        return Math.floor(100 - (salePrice / originPrice) * 100)
        // return Math.floor(((originPrice - salePrice) / originPrice) * 100)
      } else {
        return 0
      }
    }
  }, [])
}
