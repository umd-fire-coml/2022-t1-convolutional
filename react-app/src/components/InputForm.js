import React from 'react';
import '../App.css';
import TextInput from './TextInput';

export default function InputForm() {
    return(
        <div className='input'>
            <h1 className = 'input-title'>Enter Spotify Playlists</h1>
            <div className='playlist-format'>
                <h3 className='playlist-text'>Enter Playlist 1: (Required)</h3>
                <TextInput className = 'text-input' placeholder = 'Enter Playlist 1 - Name' type = 'text' name = 'playlist'/>
                <TextInput className = 'text-input' placeholder = 'Enter Playlist 1 - Link' type = 'text' name = 'playlist'/>
            </div>

            <div className='playlist-format'>
                <h3 className='playlist-text'>Enter Playlist 2: (Optional)</h3>
                <TextInput className = 'text-input' placeholder = 'Enter Playlist 2 - Name' type = 'text' name = 'playlist'/>
                <TextInput className = 'text-input' placeholder = 'Enter Playlist 2 - Link' type = 'text' name = 'playlist'/>
            </div>

            <div className='playlist-format'>
                <h3 className='playlist-text'>Enter Playlist 3: (Optional)</h3>
                <TextInput className = 'text-input' placeholder = 'Enter Playlist 3 - Name' type = 'text' name = 'playlist'/>
                <TextInput className = 'text-input' placeholder = 'Enter Playlist 3 - Link' type = 'text' name = 'playlist'/>
            </div>

            <div className='playlist-format'>
                <h3 className='playlist-text'>Enter Playlist 4: (Optional)</h3>
                <TextInput className = 'text-input' placeholder = 'Enter Playlist 4 - Name' type = 'text' name = 'playlist'/>
                <TextInput className = 'text-input' placeholder = 'Enter Playlist 4 - Link' type = 'text' name = 'playlist'/>
            </div>

            <div className='playlist-format'>
                <h3 className='playlist-text'>Enter Playlist 5: (Optional)</h3>
                <TextInput className = 'text-input' placeholder = 'Enter Playlist 5 - Name' type = 'text' name = 'playlist'/>
                <TextInput className = 'text-input' placeholder = 'Enter Playlist 5 - Link' type = 'text' name = 'playlist'/>
            </div>             
        </div>
    );
}