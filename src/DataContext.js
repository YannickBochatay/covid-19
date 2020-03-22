import React from "react"

const DataContext = React.createContext()

export default DataContext

export const withDataContext = Component => props => (
    <DataContext.Consumer>
        { ({ data, metadata }) => <Component data={ data } metadata={ metadata }/> }
    </DataContext.Consumer>
)