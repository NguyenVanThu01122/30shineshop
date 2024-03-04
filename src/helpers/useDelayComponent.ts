import { useEffect, useState } from 'react'

export const useDelayComponent = () => {
  const [showComponent, setShowComponent] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponent(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])
  return [showComponent]
}
