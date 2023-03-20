import { Grid, Link } from '@mui/material';
import MuiTypography from '@mui/material/Typography';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';

const Typography = () => (
    <MainCard title="Quản lý khách hàng">
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12} sm={6}></Grid>
        </Grid>
    </MainCard>
);

export default Typography;
