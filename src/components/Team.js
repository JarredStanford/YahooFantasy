import React from "react"
import data from "./allMyData.json"
//import Player from "./Player"
import PitcherTable from "./Tables/PitcherTable.js";
import HitterTable from "./Tables/HitterTable.js";

class Team extends React.Component {

    state = {
        hitters: [],
        pitchers: [],
        hittingCategories: [],
        pitchingCategories: []
    }

    componentDidMount() {
        this.setState({
            hitters: data.yogiStats.fantasy_content.players.player.filter(player => player.position_type === "B"),
            pitchers: data.yogiStats.fantasy_content.players.player.filter(player => player.position_type === "P"),
            hittingCategories: data.statIDs.stat.filter(stat => stat.position_types.position_type.includes("B")),
            pitchingCategories: data.statIDs.stat.filter(stat => stat.position_types.position_type.includes("P"))
        })
    }

    render() {
        return (
            <div>
                <HitterTable hitters={this.state.hitters} hittingCategories={this.state.hittingCategories} />
                <PitcherTable pitchers={this.state.pitchers} pitchingCategories={this.state.pitchingCategories} />
            </div>
        )
    }
}


export default Team