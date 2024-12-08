import { useContext, useEffect, useState } from "react";
import { TotalLikesProps } from "../../../Models/StatisticsProps";
import css from "./TotalLikes.module.css";
import NotifyContext from "../../../Context/NotifyContext";
import { useNavigate } from "react-router-dom";
import { statisticsDataService } from "../../../Services/StatisticsDataService";
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';
import { Box, Button } from "@mui/material";
import { BarChart } from "@mui/x-charts";
import { chartBox, chartButton } from "../../../Models/ChartStyle";


export function TotalLikes(): JSX.Element {

    const [likes, setLikes] = useState<TotalLikesProps>();

    const notify = useContext(NotifyContext);
    const navigate = useNavigate();

    const [localLikes, setLocalLikes] = useState<boolean>(true);

    function getServerData() {
        localStorage.removeItem("totalLikes")
        setLocalLikes(!localLikes)
    }

    useEffect(() => {
        async function getLikes() {
            try {
                let data = await statisticsDataService.getTotalLikes();
                setLikes(data);
            }
            catch (err: any) {
                notify.error(err, 5000);
                if (err?.response?.status === 404) navigate('/login');
            }
        }
        getLikes();
    }, [localLikes]);

    return (
        <div className={css.TotalLikes}>
            <Box sx={chartBox}>
                <BarChart
                    series={[
                        {
                            data: [likes?.total_likes || 0],
                            label: ((location) => {
                                if (location === 'tooltip') return 'Total Count';
                                if (location === 'legend') return 'Likes';
                            }),
                            color: '#004d40'
                        },
                    ]}
                    xAxis={[
                        {
                            scaleType: 'band',
                            data: ['Total Likes'],
                        }]}
                    barLabel="value"
                    yAxis={[
                        { label: 'Count' },
                    ]}
                    width={220}
                    height={400}/>
                <Button variant="outlined"
                    size="small"
                    sx={chartButton}
                    startIcon={<RefreshRoundedIcon />}
                    onClick={getServerData}>
                    refresh likes data
                </Button>
            </Box>
        </div>
    );
}
