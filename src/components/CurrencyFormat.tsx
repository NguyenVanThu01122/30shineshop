// hàm xử lý định dạng tiền tệ
export const CurrencyFormat = ({ amount }: any) => {
  return amount && <>{amount.toLocaleString('vi-VN')}</>
}
