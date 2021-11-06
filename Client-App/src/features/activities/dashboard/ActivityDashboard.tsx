import { groupEnd } from 'console';
import React from 'react';
import { Grid, List } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';
import ActivityForm from '../form/ActivityForm';
import Activitylist from './ActivityList';
import ActivityDetails from './details/ActivityDetails';

interface Props {
    activities: Activity[];
    selectedActivity: Activity | undefined;
    selectActivity: (id: string) => void;
    cancelSelectActivity: () => void;
}

export default function ActivityDashboard({activities, selectedActivity, 
    selectActivity, cancelSelectActivity}: Props) {
    return (
        <Grid>
            <Grid.Column width='10'>
                <Activitylist activities={activities} selectActivity={selectActivity}  />
            </Grid.Column>
            <Grid.Column width='6'>
                {
                    selectedActivity && <ActivityDetails 
                    activity={selectedActivity} cancelSelectActivity={cancelSelectActivity} /> 
                }
                <ActivityForm />
            </Grid.Column>
        </Grid>
    )
}
