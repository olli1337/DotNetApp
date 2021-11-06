import React from 'react';
import { Grid, List } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';
import Activitylist from './ActivityList';

interface Props {
    activities: Activity[];
}

export default function ActivityDashboard({activities}: Props) {
    return (
        <Grid>
            <Grid.Column width='10'>
                <List>
                    {activities.map((activity) => (
                        <Activitylist activities={activities} />
                    ))}
                </List>
            </Grid.Column>
        </Grid>
    )
}