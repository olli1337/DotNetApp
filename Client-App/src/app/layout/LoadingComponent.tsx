import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';

interface Props {
    invertedColor?: boolean;
    content?: string;
}

export default function LoadingComponent({invertedColor = true, content="Loading..."}: Props) {
    return (
        <Dimmer active={true} inverted={invertedColor}>
            <Loader content={content} />
        </Dimmer>
    )
}