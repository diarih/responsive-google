import React from 'react';
import {Button} from "@/components/ui/button.jsx";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.jsx";

const Footer = () => {
  return (
    <div className={'py-4 flex lg:w-7/12 w-full justify-between mt-auto lg:mt-0 flex-col sm:flex-row px-6 sm:px-0 gap-y-8'}>
      <div>
        <Select>
          <SelectTrigger
            className="w-[200px] border-0 shadow-none hover:bg-gray-200 font-normal">
            <SelectValue placeholder="Bahasa"/>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="indonesia">Indonesia</SelectItem>
            <SelectItem value="english">Inggris</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className={'flex gap-2'}>
        <Button variant={'ghost'} className={'font-normal text-xs bg-transparent px-3 py-2 hover:border-0 hover:bg-neutral-200 border-0'}>Bantuan</Button>
        <Button variant={'ghost'} className={'font-normal text-xs bg-transparent px-3 py-2 hover:border-0 hover:bg-neutral-200 border-0'}>Bantuan</Button>
        <Button variant={'ghost'} className={'font-normal text-xs bg-transparent px-3 py-2 hover:border-0 hover:bg-neutral-200 border-0'}>Bantuan</Button>
      </div>
    </div>
  );
};

export default Footer;