import React from "react";
import { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    return (
        <>
            <UserContext.Provider value={{ user, setUser }}> /** here value tells, which value(context) to pass to the required component */
                {children}
            </UserContext.Provider>
        </>
    )
}

export default UserContextProvider;