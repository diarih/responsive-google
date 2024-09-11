import React from 'react';
import {Card, CardContent} from "@/components/ui/card.jsx";

const CardContainer = ({children}) => {
  return (
    <Card
      className={'p-6 sm:p-9 shadow-none border-0 bg-white w-full lg:w-7/12 flex justify-between flex-col sm:flex-row gap-y-8'}>
      {children}
    </Card>
  );
};

export default CardContainer;