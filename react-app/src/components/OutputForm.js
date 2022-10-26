import React from 'react';
import '../App.css';
import * as tf from '@tensorflow/tfjs';
import TextInput from './TextInput';

async function runModel(){
    const model = await tf.loadGraphModel('(Model)');
  
    //Get User Input
}

export default function OutputForm() {
    return(
        <div className='output'>
            <h1 className = 'output-title'>Song Recommendations</h1>
            <h3 className = 'playlist-text-output'>Listen to these songs!</h3>
            {/* List predicted songs */}
        </div>
    );
}