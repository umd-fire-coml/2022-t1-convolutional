const URL = 'http://127.0.0.1:5000/recommend';

/**
 *
 * @param {string[]} playlistIds
 */
export const recommend = async (playlistIds) => {
    if (playlistIds.length === 0) return [];
    const resp = await fetch(`${URL}?playlistIds=${playlistIds.join(',')}`);
    const data = await resp.json();
    return data;
};
