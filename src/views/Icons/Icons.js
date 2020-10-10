import React from 'react';
import { Link } from 'react-router-dom';

class List extends React.Component {
    render() {
        return (
            <div>
                <p>Please choose a repository from the list below.</p>
                <ul>
                    <li><a target="_parent" href = "https://sonalisuri.github.io/MaskDetection/">React</a></li>
                </ul>
            </div>
        );
    }
}

export default List;