import { useSelector } from "react-redux";
import { TotalVacations } from "../TotalVacations/TotalVacations";
import css from "./AllStatisticsDisplay.module.css";
import { AppState } from "../../../Redux/State";
import { UsersModel } from "../../../Models/UsersModel";
import { Box, Button } from "@mui/material";
import { TotalUsers } from "../TotalUsers/TotalUsers";
import { TotalLikes } from "../TotalLikes/TotalLikes";
import { TotalCountriesLikes } from "../TotalCountriesLikes/TotalCountriesLikes";
import LoginIcon from '@mui/icons-material/Login';

export function AllStatisticsDisplay(): JSX.Element {

    const user = useSelector<AppState, UsersModel>(store => store.user);

    const statisticsPageBox = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        m: 2,
        width: 'auto',
        height: '100%',
        boxSizing: 'border-box',
    };
    const styleButton = {
        width: 190,
        backgroundColor: '#048591',
        '&:hover': {
            backgroundColor: '#006064',
            cursor: 'pointer',
        },
    }

    return (
        <div className={css.AllStatisticsDisplay}>
            {
                user && <Box sx={statisticsPageBox}>
                    <TotalVacations />
                    <TotalUsers />
                    <TotalLikes />
                    <TotalCountriesLikes />
                </Box>
            }
            {
                !user && <Box sx={{
                    ...statisticsPageBox,
                    flexDirection: 'column',
                    gap: 1,
                    alignItems: 'center',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: 40,
                }}>
                    <p>The data in this page is available for active users only⛔</p>
                    <Button variant="contained"
                        sx={styleButton}
                        size="medium"
                        endIcon={<LoginIcon />}
                        href="/login">
                        Go to Login 
                    </Button>
                </Box>
            }

        </div>
    );
}
