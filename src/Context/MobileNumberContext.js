import {createContext, useState} from 'react'

// Create a context instance
const MobileNumberContext = createContext()

// // Custom hook to access the mobile number and a function to update it
// export function useMobileNumber() {
//   return useContext(MobileNumberContext)
// }

// Provider component to wrap your app
function MobileNumberProvider({children}) {
  const [mobileNumber, setMobileNumber] = useState('')

  // You can add additional functions to update the mobile number here if needed

  return (
    <MobileNumberContext.Provider value={{mobileNumber, setMobileNumber}}>
      {children}
    </MobileNumberContext.Provider>
  )
}

export {MobileNumberContext, MobileNumberProvider}
