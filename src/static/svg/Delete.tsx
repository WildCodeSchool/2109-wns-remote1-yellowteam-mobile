import * as React from 'react'

interface ISignOut {
  color: string
}

const DeleteIcon = ({ color }: ISignOut): JSX.Element => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="15" height="15" fill="white" />
    <circle cx="7.5" cy="7.5" r="5.625" fill="#4E4F54" />
    <path
      d="M10 5L5 10"
      stroke="white"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={color}
    />
    <path
      d="M5 5L10 10"
      stroke="white"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={color}
    />
  </svg>
)

export default DeleteIcon
