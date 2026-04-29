import React from 'react'

export interface userProps {
    id: number;
    fullName: string;
    email: string;
    role: string;
    

}

export default function UserProvider() {

    const [user, setUser] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [role, setRole] = React.useState(null);
    const [token, setToken] = React.useState(null);

  return (
    <div>
      
    </div>
  )
}
