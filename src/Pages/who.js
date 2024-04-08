import react from 'react';
import { Passage, MainTitleCentered } from '../Components/PageElements';
import { Link } from 'react-router-dom';
import TextReader from '../Components/TextReader';
import text from '../TextFiles/whoamI.txt';

const Who = () => {


    return (
        <div>
            <MainTitleCentered>Who am I, and why am I like this?</MainTitleCentered>
            <TextReader textFile={text} />

            <Link to="/aleimew-website-mainpage"> return home</Link>
        </div>
    );
}

export default Who;