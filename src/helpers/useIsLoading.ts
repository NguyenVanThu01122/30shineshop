import { useState } from 'react'

type UseIsLoadingReturnType = [boolean, React.Dispatch<React.SetStateAction<boolean>>] //Khai báo kiểu trả về cho custom hook
export const useIsLoading = (): UseIsLoadingReturnType => {
  const [isLoading, setIsLoading] = useState(false)
  return [isLoading, setIsLoading]
}
