import { useContext, useEffect, useState } from "react";
import css from "./TotalCountriesLikes.module.css";
import { LikesByDestinationProps } from "../../../Models/StatisticsProps";
import NotifyContext from "../../../Context/NotifyContext";
import { useNavigate } from "react-router-dom";
import { statisticsDataService } from "../../../Services/StatisticsDataService";
import { Box, Button, CircularProgress } from "@mui/material";
import { chartBox, chartButton } from "../../../Models/ChartStyle";
import { axisClasses, BarChart } from "@mui/x-charts";
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';


export function TotalCountriesLikes(): JSX.Element {

    const [allLikes, setAllLikes] = useState<LikesByDestinationProps[]>([{ destination: "", likes: 0 }]);

    const notify = useContext(NotifyContext);
    const navigate = useNavigate();

    const [localAllLikes, setLocalAllLikes] = useState<boolean>(true);

    function getServerData() {
        localStorage.removeItem("likesByDestination")
        setLocalAllLikes(!localAllLikes)
    }

    useEffect(() => {
        async function getAllLikesByDestination() {
            try {
                let data = await statisticsDataService.getLikesByDestination();
                setAllLikes(data);
            }
            catch (err: any) {
                notify.error(err, 5000);
                if (err?.response?.status === 404) navigate('/login');
            }
        }
        getAllLikesByDestination();
    }, [localAllLikes]);

    const extraChartStyle = {
        sx: {
            [`.${axisClasses.left} .${axisClasses.label}`]: {
                transform: 'translate(-8px, 0)',
            },
            paddingLeft: 2,
            paddingRight: 1,
        },
    };
    return (
        <div className={css.TotalCountriesLikes}>
            <Box sx={chartBox}>
                {
                    allLikes?.length ? (
                        <BarChart
                            dataset={allLikes?.map((item) => ({
                                'destination': item.destination,
                                'likes': item.likes
                            })
                            )}
                            xAxis={[
                                {
                                    scaleType: 'band',
                                    dataKey: 'destination',
                                    data: allLikes?.map(item => item.destination),
                                    tickLabelStyle: {
                                        angle: 25,
                                        textAnchor: 'start',
                                        fontSize: 10,
                                    },
                                    tickPlacement: 'extremities',
                                    tickLabelPlacement: 'tick',
                                    colorMap: {
                                        type: 'ordinal',
                                        colors: ['#80cbc4', '#4db6ac', '#009688', '#00695c', '#009688', '#4db6ac']
                                    },
                                }]}
                            series={[
                                {
                                    dataKey: 'likes',
                                    label: ((location) => {
                                        if (location === 'tooltip') return 'Likes Count';
                                        if (location === 'legend') return ('Likes By Destination');
                                    }),
                                    color: '#00695c'
                                }
                            ]}
                            barLabel="value"
                            yAxis={[
                                { label: 'Likes Count' },
                            ]}
                            width={670}
                            height={400}
                            {...extraChartStyle}
                        />
                    ) : (
                        <CircularProgress sx={{
                            color: '#037a85',
                        }}/>
                    )
                }
                <Button variant="outlined"
                    size="small"
                    sx={chartButton}
                    startIcon={<RefreshRoundedIcon />}
                    onClick={getServerData}>
                    refresh vacations data
                </Button>
            </Box>
        </div>
    );
}
