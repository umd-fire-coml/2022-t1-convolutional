import React from 'react';
import '../App.css';
import TextInput from './TextInput';
import * as tf from '@tensorflow/tfjs';

async function loadModel(){
    const model = await tf.loadGraphModel('(Model)');
    console.log("Model Loaded");
}

const handleSubmit=(e)=>{
    e.preventDefault();
    var first_name,first_link, second_name, second_link, third_name, third_link,fourth_name, fourth_link, fifth_name, fifth_link, input_name, input_link, output; 
    first_name = e.target.fname.value;
    first_link = e.target.flink.value;
    second_name = e.target.sname.value;
    second_link = e.target.slink.value;
    third_name = e.target.tname.value;
    third_link = e.target.tlink.value;
    fourth_name = e.target.foname.value;
    fourth_link = e.target.folink.value;
    fifth_name = e.target.finame.value;
    fifth_link = e.target.filink.value;

    input_name = [first_name];
    if (second_name != null) input_name.push(second_name);
    if (third_name != null) input_name.push(third_name);
    if (fourth_name != null) input_name.push(fourth_name);
    if (fifth_name != null) input_name.push(fifth_name);
    
    input_link = [first_link];
    if (second_link != null) input_name.push(second_link);
    if (third_link != null) input_name.push(third_link);
    if (fourth_link != null) input_name.push(fourth_link);
    if (fifth_link != null) input_name.push(fifth_link);
    // output = model.predict(input_name, input_link);
    // const output = output.dataSync();
    // opacity: 1;
}

export default function InputForm() {
    return(
        <div className='form'>
            <div className='input'>
                <form onSubmit = {handleSubmit}>
                    <h1 className = 'input-title'>Enter Spotify Playlists</h1>
                    <div className='playlist-format'>
                        <h3 className='playlist-text'>Enter Playlist 1: (Required)</h3>
                        <TextInput className = 'first-text-input' placeholder = 'Enter Playlist 1 - Name' type = 'text' name = 'fname'/>
                        <TextInput className = 'first-link-input' placeholder = 'Enter Playlist 1 - Link' type = 'text' name = 'flink'/>
                    </div>

                    <div className='playlist-format'>
                        <h3 className='playlist-text'>Enter Playlist 2: (Optional)</h3>
                        <TextInput className = 'second-text-input' placeholder = 'Enter Playlist 2 - Name' type = 'text' name = 'sname'/>
                        <TextInput className = 'second-link-input' placeholder = 'Enter Playlist 2 - Link' type = 'text' name = 'slink'/>
                    </div>

                    <div className='playlist-format'>
                        <h3 className='playlist-text'>Enter Playlist 3: (Optional)</h3>
                        <TextInput className = 'third-text-input' placeholder = 'Enter Playlist 3 - Name' type = 'text' name = 'tname'/>
                        <TextInput className = 'third-link-input' placeholder = 'Enter Playlist 3 - Link' type = 'text' name = 'tlink'/>
                    </div>

                    <div className='playlist-format'>
                        <h3 className='playlist-text'>Enter Playlist 4: (Optional)</h3>
                        <TextInput className = 'fourth-text-input' placeholder = 'Enter Playlist 4 - Name' type = 'text' name = 'foname'/>
                        <TextInput className = 'fourth-link-input' placeholder = 'Enter Playlist 4 - Link' type = 'text' name = 'folink'/>
                    </div>

                    <div className='playlist-format'>
                        <h3 className='playlist-text'>Enter Playlist 5: (Optional)</h3>
                        <TextInput className = 'fifth-text-input' placeholder = 'Enter Playlist 5 - Name' type = 'text' name = 'finame'/>
                        <TextInput className = 'fifth-link-input' placeholder = 'Enter Playlist 5 - Link' type = 'text' name = 'filink'/>
                    </div>   
                    <button className="button-85">Predict</button>          
                </form>
            </div>
            <div className='output'>
                <h1 className = 'output-title'>Song Recommendations</h1>
                <h3 className = 'playlist-text-out'>Listen to these songs!</h3>
                <ul className = 'output-list visible'>
                    <li className = 'predict-first'></li>
                    <li className ='predict-second'></li>
                    <li className='predict-third'></li>
                </ul>
            </div>
        </div>
        );
}