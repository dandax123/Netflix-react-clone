import React from 'react';
import { useContent } from '../hooks/index'
import selectionFilter from '../utils/selection-filter'
import { BrowserContainer } from '../containers/browse';

export default function Browse() {
    const { series } = useContent('series')
    const { films } = useContent('films')
    const slides = selectionFilter({ series, films });
    return (
        <>
            <BrowserContainer slides={slides} />

        </>
    )
}