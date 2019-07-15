import React from "react"
import styled from "styled-components"

class Stat extends React.Component {
    render() {
        console.log(this.props.statCategory)
        return (
            <StatBox>
                {this.props.statCategory.display_name}: {this.props.stat}
            </StatBox>
        )
    }
}

const StatBox = styled.div`
display: flex;
flex-direction: row;`

export default Stat