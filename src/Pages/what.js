import react from 'react';
import { Link } from 'react-router-dom';
import { Passage, MainTitleCentered } from '../Components/PageElements';

const What = () => {
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

    return (
        <div>
            <MainTitleCentered>What have I done?</MainTitleCentered>
            {PrintPassage()}

            <Link to="/aleimew-website-mainpage"> return home</Link>
        </div>
    );
}

export default What;