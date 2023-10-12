import './Input.module.css'
import { InputHTMLAttributes} from 'react'


export function Input({...props}: InputHTMLAttributes<HTMLInputElement>){
  return(
    <input type="text" {...props} />
  )
}