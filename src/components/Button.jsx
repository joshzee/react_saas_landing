import React from 'react'
import clsx from 'clsx'
import { Marker } from './Marker.jsx'


const Button = ({ 
  icon, 
  children, 
  href, 
  containerClassName, 
  onClick, 
  markerFill, 
}) => {



    const Inner = () => (
  <>
  <span className='relative flex items-center min-h-[60] px-4 g4 rounded-2xl inner-before group-hover:before:opacity-100 overflow-hidden'>

    <span className="absolute -left-[1px]">
      <Marker markerFill={markerFill} />
    </span>


  

    { icon && (
    <img
      src={icon}
      alt="circle"
      className='size-10 mr-5 object-contain z-10'
      />
      )}

      <span className='relative z-9999 font-poppins babe-bold text-p1 uppercase'>{children}
       </span>
  </span>

  <span className='glow-before glow-after' /> 
</>
);


  return href ? (
    <a className={clsx("relative z-9999 p-0.5 rounded-2xl shadow-500 group",
      containerClassName,
    )}
    href={href}
    >
      <Inner />
    </a>

  ) : (
    <button className={clsx('relative z-9999 p-0.5 g5 rounded-2xl shadow-500 group',
      containerClassName,
    )}
    onClick={onClick}
    >
    
    <Inner />

    </button>
  )
}

export default Button