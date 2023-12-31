import React, { useEffect, useRef } from "react";
import videojs from "video.js";
import 'video.js/dist/video-js.css';
import "videojs-hotkeys";
import style from "./VideoPlayer.module.css"


const VideoPlaer = ({option, themeName="sea"})=>{
    const videoRef = useRef(null)
    const playerRef = useRef(null)

    useEffect(()=>{
        const player = playerRef.current;
        if(!player){
            const videoElement = videoRef.current;
            if(!videoElement) return;

            playerRef.current = videojs(videoElement, option);
        }

        return () =>{
            if(player){
                playerRef.current = null;

            }
        }
    }, [option, videoRef, playerRef])

    return(
        <div data-vjs-player >
            <video playsInline="1"  data-setup='{"userActions": {"doubleClick": false }}'  ref={videoRef} className={`video-js vjs-big-play-centered ` }></video>
        </div>
    )
}

export default VideoPlaer