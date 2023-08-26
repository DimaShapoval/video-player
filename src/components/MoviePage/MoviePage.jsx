import React, { useEffect, useState } from "react";
import style from "./MoviePage.module.css"
import VideoPlayer from "./VideoPlayer/VideoPlaer";
import "videojs-hotkeys";
import ActorItem from "./ActorItem/ActorItem";

const MoviePage = ({ imageSrc, title, comment, videoSrc, domainLink, infoOfActors }) => {
    const [ arrayOfActors, setArrayOfActors ] = useState(null) 
    let videoOption = { //add properties for video player
        controls: true,
        sources: [{
            src: `${domainLink}/${videoSrc}`,
            type: 'video/mp4; application/x-mpegURL; application/vnd.apple.mpegurl'
        }],
        aspectRatio: '16:9',
        plugins: {
            hotkeys: {
                volumeStep: 0.1,
                seekStep: 15,
                enableModifiersForNumbers: false,
                doubleClick: true
            },
        },
        className: "lol",
        userActions: {
            doubleClick: true
        }



    }
    useEffect(()=>{
        if(infoOfActors){
            setArrayOfActors([...infoOfActors].map((item, index) => {
                let link = `${domainLink}/${item.photo}`
                return <ActorItem nameOfActor={item.name} key={index} photoOfActor={link.replace(/ /g,'')} />
            }))
        }
       
    }, [infoOfActors])
    
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
                    <VideoPlayer className={style.videoWrapper} option={videoOption} />

                </div>
            </div>
            <div className={style.actorWrapper} >
                <h2>演员</h2>
                <div className={style.actorItemsWrapper} >
                    {arrayOfActors ? arrayOfActors : null}
                </div>
            </div>

        </div>
    )
}

export default MoviePage;