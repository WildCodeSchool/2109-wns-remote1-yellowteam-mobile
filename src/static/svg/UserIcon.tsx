import * as React from 'react'

interface IUser {
  color: string
}

const UserIcon = ({ color }: IUser): JSX.Element => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M24.2183 25.4691C24.8031 25.3446 25.1521 24.7345 24.8796 24.2023C24.1454 22.7684 22.9421 21.5084 21.3837 20.5582C19.4608 19.3856 17.1047 18.75 14.6809 18.75C12.2571 18.75 9.90097 19.3856 7.97802 20.5582C6.41963 21.5084 5.21629 22.7684 4.48214 24.2023C4.20965 24.7345 4.55861 25.3446 5.14341 25.4691L6.35021 25.7261C11.8424 26.8956 17.5193 26.8956 23.0115 25.7261L24.2183 25.4691Z"
      fill={color}
    />
    <ellipse cx="14.6809" cy="10" rx="6.11702" ry="6.25" fill={color} />
  </svg>
)

export default UserIcon
