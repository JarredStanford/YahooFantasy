import React from "react"
import data from "./allMyData.json"
import Player from "./Player"
import styled from "styled-components"
import { Table, TableBody, TableCell, TableHead, TableRow, Paper } from '@material-ui/core/'

class Team extends React.Component {

    state = {
        myTeam: [],
        statCategories: []
    }

    componentDidMount() {
        this.setState({
            myTeam: data.myPlayersStats.fantasy_content.players.player,
            statCategories: data.statIDs.stat
        })
    }

    render() {
        console.log(this.state.myTeam)
        console.log(this.state.statCategories)
        return (
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Player Name</TableCell>
                            {this.state.statCategories.map(category => {
                                return <TableCell key={category.stat_id}>{category.display_name}</TableCell>
                            })}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.myTeam.map(player => {
                            return (
                                <TableRow key={player.player_id}>
                                    <TableCell>{player.name.full}</TableCell>
                                    {player.player_stats.stats.stat.sort((a, b) => a.stat_id - b.stat_id)
                                        .map(stat => {
                                            return <TableCell key={stat.stat_id} align="right">{stat.value}</TableCell>
                                        })}
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </Paper>
        )
    }
}

const CardHolder = styled.div`
display: flex;
flex-direction: row;
flex-flow: wrap;
width: 100%;
height: 20rem`


export default Team