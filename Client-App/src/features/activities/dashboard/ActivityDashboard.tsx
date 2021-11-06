import { groupEnd } from 'console';
import React from 'react';
import { Grid, List } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';
import Activitylist from './ActivityList';
import ActivityDetails from './details/ActivityDetails';

interface Props {
    activities: Activity[];
}

export default function ActivityDashboard({activities}: Props) {
    return (
        <Grid>
            <Grid.Column width='10'>
                <Activitylist activities={activities} />
            </Grid.Column>
            <Grid.Column width='6'>
                {
                    activities[0] && <ActivityDetails activity={activities[0]} /> 
                }
            </Grid.Column>
        </Grid>
    )
}