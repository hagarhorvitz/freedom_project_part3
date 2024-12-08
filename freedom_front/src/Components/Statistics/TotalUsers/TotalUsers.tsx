import { useContext, useEffect, useState } from "react";
import css from "./TotalUsers.module.css";
import { TotalUsersProps } from "../../../Models/StatisticsProps";
import NotifyContext from "../../../Context/NotifyContext";
import { useNavigate } from "react-router-dom";
import { statisticsDataService } from "../../../Services/StatisticsDataService";
import { Box, Button } from "@mui/material";
import { BarChart, AxisConfig } from "@mui/x-charts";
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';
import { chartBox, chartButton } from "../../../Models/ChartStyle";


export function TotalUsers(): JSX.Element {
    
    const [users, setUsers] = useState<TotalUsersProps>();

    const notify = useContext(NotifyContext);
    const navigate = useNavigate();

    const [localUsers, setLocalUsers] = useState<boolean>(true);

    function getServerData() {
        localStorage.removeItem("totalUsers")
        setLocalUsers(!localUsers)
    }

    useEffect(() => {
        async function getUsers() {
            try {
                let data = await statisticsDataService.getTotalUsers();
                setUsers(data);
            }
            catch (err: any) {
                notify.error(err, 5000);
                if (err?.response?.status === 404) navigate('/login');
            }
        }
        getUsers();
    }, [localUsers]);

    return (
        <div className={css.TotalUsers}>
            <Box sx={chartBox}>
                <BarChart
                    series={[
                        {
                            data: [users?.total_users || 0],
                            label: ((location) => {
                                if (location === 'tooltip') return 'Total Count';
                                if (location === 'legend') return 'Users';
                            }),
                            color:'#00796b'
                        },
                    ]}
                    xAxis={[
                        {
                            scaleType: 'band',
                            data: ['Total Users'],
                        }]}
                    barLabel="value"
                    yAxis={[
                        { label: 'Count' }
                    ]}
                    width={220}
                    height={400}/>
                <Button variant="outlined"
                    size="small"
                    sx={chartButton}
                    startIcon={<RefreshRoundedIcon />}
                    onClick={getServerData}>
                    refresh users data
                </Button>
            </Box>
        </div>
    );
}
