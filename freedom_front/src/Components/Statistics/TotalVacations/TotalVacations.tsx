import { useContext, useEffect, useState } from "react";
import css from "./TotalVacations.module.css";
import { statisticsDataService } from "../../../Services/StatisticsDataService";
import NotifyContext from "../../../Context/NotifyContext";
import { useNavigate } from "react-router-dom";
import { TotalVacationsProps } from "../../../Models/StatisticsProps";
import { Box, Button } from "@mui/material";
import { BarChart } from '@mui/x-charts/BarChart';
import { chartBox, chartButton } from "../../../Models/ChartStyle";
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';

export function TotalVacations(): JSX.Element {

    const [vacations, setVacations] = useState<TotalVacationsProps>(); 

    const notify = useContext(NotifyContext);
    const navigate = useNavigate();

    const [localVacations, setLocalVacations] = useState<boolean>(true);

    function getServerData() {
        localStorage.removeItem("totalVacations")
        setLocalVacations(!localVacations)
    }

    useEffect(() => {
        async function getVacations() {
            try {
                let data = await statisticsDataService.getTotalVacationsByStatus();
                setVacations(data);
            }
            catch (err: any) {
                notify.error(err, 5000);
                if (err?.response?.status === 404) navigate('/login');
            }
        }
        getVacations();
    }, [localVacations]);

    return (
        <div className={css.TotalVacations}>
            <Box sx={chartBox}>
                <BarChart
                    dataset={[
                        { status: 'Past Vacations', value: vacations?.past_vacations || 0, label: 'Past Vacations' },
                        { status: 'On Going Vacations', value: vacations?.on_going_vacations  || 0, label: 'On Going Vacations' },
                        { status: 'Future Vacations', value: vacations?.future_vacations || 0, label: 'Future Vacations' }
                    ]}
                    xAxis={[
                        {
                            scaleType: 'band',
                            dataKey: 'status',
                            data: ['Past Vacations', 'On Going Vacations', 'Future Vacations'],
                            colorMap: {
                                type: 'ordinal',
                                colors: ['#80cbc4', '#4db6ac', '#009688']
                            },
                        }]}
                    series={[
                        {
                            dataKey: 'value',
                            label: ((location) => { 
                                if (location === 'tooltip') return 'Total Count';
                                if (location === 'legend') return ('Vacations by Date Status');  
                            }), 
                            color: '#4db6ac'
                        }
                    ]}
                    barLabel="value"
                    yAxis= {[
                        {label: 'Count'},
                    ]}
                    width={460}
                    height={400}
                />
                <Button variant="outlined"
                    size="small"
                    sx={chartButton}
                    startIcon={<RefreshRoundedIcon/>}
                    onClick={getServerData}>
                    refresh vacations data
                </Button>
            </Box>
        </div>
    );
}
