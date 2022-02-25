/* eslint-disable react/require-default-props */
import * as React from 'react'

interface IProps {
  width?: string
  height?: string
  color?: string
}

const AddIcon = ({
  width = '50',
  height = '52',
  color = '#EBECF0',
}: IProps): JSX.Element => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 50 52"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M43.75 25.641C43.75 36.2619 35.3553 44.8718 25 44.8718C14.6447 44.8718 6.25 36.2619 6.25 25.641C6.25 15.0202 14.6447 6.41028 25 6.41028C35.3553 6.41028 43.75 15.0202 43.75 25.641ZM25 37.3248C24.4477 37.3248 24 36.8771 24 36.3248V26.641H14.5833C14.031 26.641 13.5833 26.1933 13.5833 25.641C13.5833 25.0888 14.031 24.641 14.5833 24.641H24V14.9573C24 14.405 24.4477 13.9573 25 13.9573C25.5523 13.9573 26 14.405 26 14.9573V24.641H35.4167C35.969 24.641 36.4167 25.0888 36.4167 25.641C36.4167 26.1933 35.969 26.641 35.4167 26.641H26V36.3248C26 36.8771 25.5523 37.3248 25 37.3248Z"
      fill={color}
    />
  </svg>
)

export default AddIcon
