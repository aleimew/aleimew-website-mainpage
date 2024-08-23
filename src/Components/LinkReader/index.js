import React, { Component } from "react";
import axios from "axios";
import { useState } from "react";
import { Passage, Video } from "../PageElements";

class LinkReader extends Component {
    state = {
        details: [],
        name: "",
        link: "",
    };

    componentDidMount = () => {
        let data;

        axios
            .get("http://localhost:8001/youtube/")
            .then((res) => {
                data = res.data;
                this.setState({
                    details: data,
                });
            })
            .catch((err) => { });

    }



    render() {
        return (
            <div>
                {this.state.details.map((detail, id) => (
                    <div key={id}>
                        <Passage> {detail.name} </Passage>
                        <Video className='video'
                            title='Youtube player'
                            sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                            src={`https://youtube.com/embed/${detail.detail}?autoplay=0`}
                        >
                            <Passage> test </Passage>
                        </Video>
                    </div>
                ))}
            </div>
        )
    }
}

export default LinkReader;