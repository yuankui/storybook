import React from 'react';
import MindMap from "@yuankui/mindmap";
import {useState} from "@storybook/addons";
import "@yuankui/mindmap/src/mindmap/MindMap.scss"
export default {
    title: 'MindMap',
    component: MindMap,
};

export const MindMapDemo = () => {
    const [state, onChange] = useState({
        roots: [
            {
                "id": 1,
                "text": "Start here",
            }
        ]
    });
    return <MindMap value={state} onChange={onChange}/>;
}

MindMapDemo.story = {
    name: 'with emoji',
};
