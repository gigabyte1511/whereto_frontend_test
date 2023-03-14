import { useLayoutEffect, useRef } from 'react'

export function ScrollTest() {
  const h2ref = useRef(null)

  useLayoutEffect(() => {
    h2ref.current.scrollIntoView()
  }, [])

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>1. Start editing to see some magic happen!</h2>
      <p style={{ height: '300px' }} />
      <h2 ref={h2ref}>2. Start editing to see some magic happen!</h2>
      <p style={{ height: '300px' }} />
      <h2>3. Start editing to see some magic happen!</h2>
      <p style={{ height: '300px' }} />
      <h2>4. Start editing to see some magic happen!</h2>
      <p style={{ height: '300px' }} />
      <h2>5. Start editing to see some magic happen!</h2>
      <p style={{ height: '300px' }} />
    </div>
  )
}
