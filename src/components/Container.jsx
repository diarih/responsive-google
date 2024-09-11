import React from 'react';

const Container = ({children}) => {
  return (
    <div
      className={'h-screen w-screen flex flex-col items-center justify-center py-0 lg:py-24 bg-white lg:bg-[#F0F4F9]'}>
      {children}
    </div>
  );
};

export default Container;