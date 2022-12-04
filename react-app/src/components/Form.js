import React, { useState } from 'react';
import TextInput from './TextInput';
import { recommend } from '../recommend';
import "../App.css";
import * as tf from '@tensorflow/tfjs';

// async function loadModel() {
//     const model = await tf.loadGraphModel('(Model)');
//     console.log('Model Loaded');
// }

export default function Form() {
    const [recommendations, setRecommendations] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const first_name = e.target.fname.value;
        const first_link = e.target.flink.value;
        const second_name = e.target.sname.value;
        const second_link = e.target.slink.value;
        const third_name = e.target.tname.value;
        const third_link = e.target.tlink.value;
        const fourth_name = e.target.foname.value;
        const fourth_link = e.target.folink.value;
        const fifth_name = e.target.finame.value;
        const fifth_link = e.target.filink.value;

        const input_name = [];
        const input_link = [];
        if (first_name && first_link) {
            input_name.push(first_name);
            input_link.push(first_link);
        }
        if (second_name && second_link) {
            input_name.push(second_name);
            input_link.push(second_link);
        }
        if (third_name && third_link) {
            input_name.push(third_name);
            input_link.push(third_link);
        }
        if (fourth_name && fourth_link) {
            input_name.push(fourth_name);
            input_link.push(fourth_link);
        }
        if (fifth_name && fifth_link) {
            input_name.push(fifth_name);
            input_link.push(fifth_link);
        }

        console.log(input_name);
        console.log(input_link);

        if (
            input_link.length > 0 &&
            input_link.every((i) => typeof i === 'string')
        ) {
            const recs = await recommend(input_link);
            console.log(recs);
            setRecommendations(recs.recommendations);
        }

        // output = model.predict(input_name, input_link);
        // const output = output.dataSync();
    };

    return (
        <div className='form'>
            <div className='input'>
                <form onSubmit={handleSubmit}>
                    <h1 className='input-title'>Enter Spotify Playlists</h1>
                    <div className='playlist-format'>
                        <h3 className='playlist-text'>
                            Enter Playlist 1: (Required)
                        </h3>
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

                    <div className='playlist-format'>
                        <h3 className='playlist-text'>
                            Enter Playlist 2: (Optional)
                        </h3>
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

                    <div className='playlist-format'>
                        <h3 className='playlist-text'>
                            Enter Playlist 3: (Optional)
                        </h3>
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

                    <div className='playlist-format'>
                        <h3 className='playlist-text'>
                            Enter Playlist 4: (Optional)
                        </h3>
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

                    <div className='playlist-format'>
                        <h3 className='playlist-text'>
                            Enter Playlist 5: (Optional)
                        </h3>
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
                    <button className='button-85'>Predict</button>
                </form>
            </div>
            <div className='output'>
                <h1 className='output-title'>Song Recommendations</h1>
                <h3 className='playlist-text-out'>Listen to these songs!</h3>
                <ul className='output-list'>
                    {recommendations.map((i, r) => <li key={i}>{r}</li>)}
                </ul>
            </div>
        </div>
    );
}
