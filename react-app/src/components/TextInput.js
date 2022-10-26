import React from 'react';
import { useState } from 'react';

export default function TextInput(props) {
        const {
          className,  
          type = 'text', 
          placeholder,
          name, 
          value, 
        } = props;
      
        return (
          <div>
                <input
                className = {className}
                placeholder = {placeholder}
                type={type}
                name={name}
                value={value}
                />
          </div>
        )
      }