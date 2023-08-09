import React from "react";
import style from "./MoviePage.module.css"
import ReactPlayer from "react-player";
import VideoPlayer from "./VideoPlayer/VideoPlaer";

const MoviePage = ({ imageSrc, title, comment, videoSrc, domainLink }) => {
    let videoOption = {
        controls: true,
        sources: [{
            src: `${domainLink}/${videoSrc}`,
            type: 'video/mp4; application/x-mpegURL; application/vnd.apple.mpegurl'
        }],
        aspectRatio: '16:9',

    }
    return (
        <div className={style.wrapperOfAllDiv} >
            <div className={style.wrapper} >
                <div className={style.secondWrapper} >
                    <div className={style.imageWrapper} >
                        <img src={imageSrc} alt="image of movie" />
                    </div>
                    <div className={style.infoWrapper} >
                        <h2>{title}</h2>
                        <h4>{comment}</h4>
                    </div>

                </div>

            </div>
            <div className={style.wrapperForPlayer} >
                <div className={style.playerWrapper} >
                    {/* <ReactPlayer url={`http://bancdsabadell.com/${videoSrc}`}  controls="true" /> */}
                    <VideoPlayer className={style.videoWrapper} option={videoOption} />

                </div>
            </div>

        </div>
    )
}

export default MoviePage;