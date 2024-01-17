import react from 'react';
import { Link } from 'react-router-dom';
import { Passage, BoldText, MainTitleCentered } from '../Components/PageElements';

const How = () => {

    const PrintPassage = () => {
        return (
            <div>
                <Passage>
                    This is where I post all of my socials that I have.
                    For now, if for whatever reason you wantted to contact
                    me eventhough I haven't posted anything here for some
                    reason, my email is alex@amoore.com
                </Passage>
            </div>
        )
    }

    return (
        <div>
            <MainTitleCentered>How do you summon me, probably?</MainTitleCentered>
            {PrintPassage()}

            <Link to="/aleimew-website-mainpage"> return home</Link>
        </div>
    );
}

export default How;