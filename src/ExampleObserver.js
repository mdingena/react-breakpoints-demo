import React, { useState, useCallback, useEffect } from 'react'

const ExampleObserver = ({ selector }) => {
  const [observationCount, setObservationCount] = useState(0)

  const handleObservations = useCallback(observations => {
    setObservationCount(count => count + 1)
    console.table(observations)
  }, [setObservationCount])

  useEffect(() => {
    const ro = new window.ResizeObserver(handleObservations)

    const elements = document.querySelectorAll(selector)
    elements.forEach(element => ro.observe(element))

    return () => {
      ro.disconnect()
    }
  }, [selector, handleObservations])

  return (
    <>
      # of observations: <code>{observationCount}</code>
    </>
  )
}

export default ExampleObserver