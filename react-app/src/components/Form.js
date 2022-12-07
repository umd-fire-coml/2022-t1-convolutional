import React, { useState } from 'react';
import '../App.css';
import TextInput from './TextInput';
import * as tf from '@tensorflow/tfjs';
import ToggleVisibility from './ToggleVisibility';
import { recommend } from '../recommend';

async function loadModel() {
    const model = await tf.loadGraphModel('(Model)');
    console.log('Model Loaded');
}

export default function Form() {
    const [recs, setRecs] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        var first_name,
            first_link,
            second_name,
            second_link,
            third_name,
            third_link,
            fourth_name,
            fourth_link,
            fifth_name,
            fifth_link,
            input_name,
            input_link,
            output;
        if (e.target.fname) first_name = e.target.fname.value;
        if (e.target.flink) first_link = e.target.flink.value;
        if (e.target.sname) second_name = e.target.sname.value;
        if (e.target.slink) second_link = e.target.slink.value;
        if (e.target.tname) third_name = e.target.tname.value;
        if (e.target.tlink) third_link = e.target.tlink.value;
        if (e.target.foname) fourth_name = e.target.foname.value;
        if (e.target.folink) fourth_link = e.target.folink.value;
        if (e.target.finame) fifth_name = e.target.finame.value;
        if (e.target.filink) fifth_link = e.target.filink.value;

        input_name = [];
        if (first_name) input_name.push(first_name);
        if (second_name) input_name.push(second_name);
        if (third_name) input_name.push(third_name);
        if (fourth_name) input_name.push(fourth_name);
        if (fifth_name) input_name.push(fifth_name);

        input_link = [];
        if (first_link) input_link.push(first_link);
        if (second_link) input_link.push(second_link);
        if (third_link) input_link.push(third_link);
        if (fourth_link) input_link.push(fourth_link);
        if (fifth_link) input_link.push(fifth_link);
        // output = model.predict(input_name, input_link);
        // const output = output.dataSync();
        // opacity: 1;

        console.log(input_link);

        if (input_link.length > 0) {
            const resp = await recommend(input_link);
            console.log(resp.recommendations)
            setRecs(resp.recommendations);
        }
    };

    return (
        <div className='form'>
            <div className='input'>
                <form onSubmit={handleSubmit}>
                    <h1 className='input-title'>Enter Spotify Playlists</h1>
                    <div className='playlist-format'>
                        <h3 className='playlist-text'>Enter Playlist 1:</h3>
                        <TextInput
                            className='first-text-input'
                            placeholder='Enter Playlist 1 - Name'
                            type='text'
                            name='fname'
                        />
                        <TextInput
                            className='first-link-input'
                            placeholder='Enter Playlist 1 - Link'
                            type='text'
                            name='flink'
                        />
                    </div>
                    <ToggleVisibility>
                        <div className='playlist-format-2'>
                            <h3 className='playlist-text'>Enter Playlist 2:</h3>
                            <TextInput
                                className='second-text-input'
                                placeholder='Enter Playlist 2 - Name'
                                type='text'
                                name='sname'
                            />
                            <TextInput
                                className='second-link-input'
                                placeholder='Enter Playlist 2 - Link'
                                type='text'
                                name='slink'
                            />
                        </div>
                    </ToggleVisibility>
                    <ToggleVisibility>
                        <div className='playlist-format-3'>
                            <h3 className='playlist-text'>Enter Playlist 3:</h3>
                            <TextInput
                                className='third-text-input'
                                placeholder='Enter Playlist 3 - Name'
                                type='text'
                                name='tname'
                            />
                            <TextInput
                                className='third-link-input'
                                placeholder='Enter Playlist 3 - Link'
                                type='text'
                                name='tlink'
                            />
                        </div>
                    </ToggleVisibility>
                    <ToggleVisibility>
                        <div className='playlist-format-4'>
                            <h3 className='playlist-text'>Enter Playlist 4:</h3>
                            <TextInput
                                className='fourth-text-input'
                                placeholder='Enter Playlist 4 - Name'
                                type='text'
                                name='foname'
                            />
                            <TextInput
                                className='fourth-link-input'
                                placeholder='Enter Playlist 4 - Link'
                                type='text'
                                name='folink'
                            />
                        </div>
                    </ToggleVisibility>
                    <ToggleVisibility>
                        <div className='playlist-format-5'>
                            <h3 className='playlist-text'>Enter Playlist 5:</h3>
                            <TextInput
                                className='fifth-text-input'
                                placeholder='Enter Playlist 5 - Name'
                                type='text'
                                name='finame'
                            />
                            <TextInput
                                className='fifth-link-input'
                                placeholder='Enter Playlist 5 - Link'
                                type='text'
                                name='filink'
                            />
                        </div>
                    </ToggleVisibility>
                    <button className='button-1'>Predict</button>
                </form>
            </div>
            <div className='output'>
                <h1 className='output-title'>Song Recommendations</h1>
                <h3 className='playlist-text-out'>Listen to these songs!</h3>
                <ul className='output-list visible'>
                    {recs.map((rec, idx) => <li key={idx}>{rec}</li>)}
                </ul>
            </div>
        </div>
    );
}
