import react from 'react';
import { Link } from 'react-router-dom';
import { Passage, BoldText, MainTitleCentered } from '../Components/PageElements';
import text from "../TextFiles/howdoyousummonme.txt";
import TextReader from '../Components/TextReader';

const How = () => {

    return (
        <div>
            <MainTitleCentered>How do you summon me, probably?</MainTitleCentered>
            <TextReader textFile={text} />

            <Link to="/aleimew-website-mainpage"> return home</Link>
        </div>
    );
}

export default How;