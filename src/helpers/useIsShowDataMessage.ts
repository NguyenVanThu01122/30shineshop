import { useState } from 'react'
type UseIsLoadingReturnType = [boolean, React.Dispatch<React.SetStateAction<boolean>>]
export const useShowDataMessage = (): UseIsLoadingReturnType => {
  const [isShowDataMessage, setIsShowDataMessage] = useState(false)
  return [isShowDataMessage, setIsShowDataMessage]
}
