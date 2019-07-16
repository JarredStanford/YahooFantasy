import React from "react"
import { Table, TableBody, TableCell, TableHead, TableRow, Paper } from '@material-ui/core/'

class HitterTable extends React.Component {

    render() {
        return (
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Hitters</TableCell>
                            {this.props.hittingCategories.map(category => {
                                return <TableCell key={category.stat_id}>{category.display_name}</TableCell>
                            })}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.hitters.map(player => {
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

export default HitterTable;