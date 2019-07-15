import React from "react"
import { Card, CardHeader, CardMedia, CardContent, CardActions, Avatar, Typography } from "@material-ui/core/"
import Stat from "./Stat.js"

class Player extends React.Component {
    render() {
        return (
            <Card>
                <CardHeader
                    avatar={<Avatar><img src={this.props.player.headshot.url} alt="nah" /></Avatar>}
                    title={this.props.player.name.full}
                    subheader={this.props.player.display_position} />
                <CardContent>
                    {this.props.player.player_stats.stats.stat.map(stat => {
                        return <Stat key={stat.stat_id} stat={stat.value} statID={stat.stat_id}
                            statCategory={this.props.statCategories.find(category => stat.stat_id === category.stat_id)} />
                    })}
                </CardContent>
            </Card>
            /*<CardHolder>
            {this.state.myTeam.map(player => {
                console.log(player)
                return <Player key={player.player_id} player={player} statCategories={this.state.statCategories} />
            })}
        </CardHolder>*/
        )
    }
}


export default Player