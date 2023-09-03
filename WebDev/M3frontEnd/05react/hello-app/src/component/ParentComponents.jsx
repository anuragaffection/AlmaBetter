import React from 'react';
import ChildComponent from './ChildComponents';

function ParentComponent() {
    const name = 'John Doe';
    const age = 25;

    return <ChildComponent name={name} age={age} />;
}

export default ParentComponent;