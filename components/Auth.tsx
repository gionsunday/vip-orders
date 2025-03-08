"use client"

import React from 'react';
import { CustomButtonProps } from '@/types';

const CustomButton = ({ title, constainerStyles, handleClick }: CustomButtonProps) => {
  return (
    <div className='flex justify-end items-end mx-auto w-full'>
      <button
        disabled={false}
        type={"button"}
        className={`custom-btn ${constainerStyles}`}
        onClick={handleClick}
      >
        <span className={`flex-1  `}>
          {title}
        </span>
      </button>

    </div>


  )
};
export default React.memo(CustomButton);