import React from "react";
import { Link } from "react-router-dom";
import { MainTitleCentered, Passage } from "../Components/PageElements";
import DjangoTest from "../TestComponents/DjangoTest";

const Test = () => {

    return (
        <div>
            <MainTitleCentered>This is to test out the implimentation of Django on this project</MainTitleCentered>
            <Passage> This webpage is present for only the purposes of the assessment </Passage>

            <Passage>


                <DjangoTest />
            </Passage>

            <Link to="/aleimew-website-mainpage"> return home</Link>

        </div>
    );

}

export default Test;