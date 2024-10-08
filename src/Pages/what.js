import react from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Passage, MainTitleCentered, Video, VideoMobile } from '../Components/PageElements';
import SubNavbarWhat from '../Components/Navbar/subNavbarWhat';
import text from "../TextFiles/whatdoIdo.txt";
import TextReader from '../Components/TextReader';
import LinkReader from '../Components/LinkReader';
import VideoPlayer from '../Components/VideoPlayer';

const What = (props) => {
    const [youtubeID] = useState("bWMyEn-EKCE");

    return (
        <div>
            <MainTitleCentered>What have I done?</MainTitleCentered>
            <br />
            {//<SubNavbarWhat />}
            }
            <TextReader textFile={text} />

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

            <Passage>
                Testing out new component here:
            </Passage>

            <LinkReader />


            <Link to="/aleimew-website-mainpage"> return home</Link>
        </div>
    );
}

export default What;