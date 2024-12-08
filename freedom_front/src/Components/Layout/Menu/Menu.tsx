import css from "./Menu.module.css";
import sunLogo from "../../../Assets/Logos/logo_sun.png"
import Button from "@mui/material/Button";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PsychologyAltRoundedIcon from '@mui/icons-material/PsychologyAltRounded';
import InsightsRoundedIcon from '@mui/icons-material/InsightsRounded';
import { Stack } from "@mui/material";


export function Menu(): JSX.Element {

    const styleButton = {
        width: 190,
        backgroundColor: '#048591',
        '&:hover': {
            backgroundColor: '#006064', 
            cursor: 'pointer',
        },
    }

    return (
        <div className={css.Menu}>
            <Stack direction="column" spacing={5} alignItems="center">
                <img src={sunLogo}/>
                <Button variant="contained"
                    sx={styleButton} 
                    size="large"
                    startIcon={<HomeRoundedIcon />}
                    href="/home">
                        Home
                </Button>
                <Button variant="contained"
                    sx={styleButton} 
                    size="large"
                    startIcon={<PsychologyAltRoundedIcon />}
                    href="/about">
                        About Me
                </Button>
                <Button variant="contained" 
                    sx={styleButton} 
                    size="large"
                    startIcon={<InsightsRoundedIcon />}
                    href="/statistics">
                        All Statistics
                </Button>
            </Stack>
        </div>
    );
}
