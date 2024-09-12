import React from 'react';
import {cn} from "@/lib/utils.js";

const FloatingInput = React.forwardRef(({className, type, ...props}, ref) => {
  return (
    (<div ref={ref}>
      <div className="relative">
        <input type={type} id="floating_outlined"
               className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded border-gray-500 appearance-none dark:text-white dark:border-gray-100 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-800 peer border-[1.5px]"
               placeholder="" {...props}/>
        <label htmlFor="floating_outlined"
               className="cursor-text absolute text-sm text-gray-500 dark:text-gray-400 duration-200 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">{props.label}</label>
      </div>
    </div>)
  );
})

export default FloatingInput;