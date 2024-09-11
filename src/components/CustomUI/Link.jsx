import React from 'react';
import {Button} from "@/components/ui/button.jsx";
import {cn} from "@/lib/utils.js";

const Link = ({children, className}) => {
  return (
    <Button variant={'link'} className={cn('bg-transparent border-0 px-0 font-medium', className)}>
      {children}
    </Button>
  );
};

export default Link;