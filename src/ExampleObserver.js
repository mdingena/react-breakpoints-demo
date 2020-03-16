import React, { useState, useCallback, useEffect } from 'react'

const ExampleObserver = ({ elementType }) => {
  const [observations, setObservations] = useState(0)

  const handleObservation = useCallback(resizeObserverEntry => {
    setObservations(current => current + 1)
    console.table(resizeObserverEntry)
  }, [setObservations])

  useEffect(() => {
    const ro = new window.ResizeObserver(handleObservation)

    const elements = document.querySelectorAll(elementType)
    elements.forEach(element => ro.observe(element))

    return () => {
      ro.disconnect()
    }
  }, [elementType, handleObservation])

  return (
    <>
      # of callbacks: <code>{observations}</code>
    </>
  )
}

export default ExampleObserver
