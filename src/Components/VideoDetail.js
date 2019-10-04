import React from 'react';

const VideoDetail = ({ video }) => {
    if (!video) {
        return <div>Loading</div>
    }

    const videoURL = `https://www.youtube.com/embed/${video.id.videoId}`;
    const videoTitle = video.snippet.title;

    return (
        <div>
            <div className="ui embed">
                <iframe src={videoURL} title={videoTitle} />
            </div>
            <div className="ui segment">
                <h4 className="ui header">{videoTitle}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    );
}

export default VideoDetail;