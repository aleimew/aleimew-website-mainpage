import react from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Passage, MainTitleCentered, Video, VideoMobile } from '../Components/PageElements';
import VideoPlayer from '../Components/VideoPlayer';

const What = (props) => {
    const [youtubeID] = useState("a1SMgYG8nFQ?si=sfMD23f1OE9yuvdx")

    const PrintPassage = () => {
        return (
            <div>
                <Passage>
                    All the things I have worked on will be posted here. This website is still
                    a work in progress, so this text will be here for now.
                </Passage>
            </div>
        )
    }

    const PrintTempPassage = () => {
        return (
            <>
                <Passage>
                    Since I'm here, I'm gonna test out this video player by
                    linking it to this video I edited. In the future, I want to
                    find a way to host my own video directly on this site, but
                    this will have to do for now.
                </Passage>
            </>
        )
    }

    return (
        <div>
            <MainTitleCentered>What have I done?</MainTitleCentered>
            {PrintPassage()}
            {PrintTempPassage()}

            {!props.mobile ? (
                <Video className='video'
                    title='Youtube player'
                    sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                    src={`https://youtube.com/embed/${youtubeID}?autoplay=0`}>
                </Video>
            ) : (
                <VideoMobile className='video'
                    title='Youtube player'
                    sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                    src={`https://youtube.com/embed/${youtubeID}?autoplay=0`}>
                </VideoMobile>
            )}


            <Link to="/aleimew-website-mainpage"> return home</Link>
        </div>
    );
}

export default What;