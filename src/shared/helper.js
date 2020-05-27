import React from 'react';

export const mainClass = (modClass) => {
    return `${modClass} hoc clear`;
};

export const Wrapper = (props) => (
    <div className={"wrapper " + props.class} style={props.style}>
        {props.children}
    </div>
);

export const PageWrapper = (props) => (
    <Wrapper class="main-row">
        <main className={mainClass("container")}>
            {props.children}
        </main>
    </Wrapper>
);