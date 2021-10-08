import React from "react"
import * as bs from "react-bootstrap"

export function AppContainer(props) {

    return (
        <bs.Container>
            {props.children}
        </bs.Container>
    )
}
