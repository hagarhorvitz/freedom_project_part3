import css from "./HomePage.module.css";
import Box from '@mui/material/Box';
import pieChartImage from '../../../Assets/Images/pie_chart_home.jpg'


export function HomePage(): JSX.Element {

    const styleHomeBox = {
        display: 'inline-flex',
        boxShadow: 5,
        borderRadius: 3,
        p: 3,
        m: 1,
        width: 450,
        height: 'auto',
        textAlign: 'center',
        alignItems: 'center',
        overflow: 'auto',
        boxSizing: 'border-box',
    };

    return (
        <div className={css.HomePage}>
            <Box sx={styleHomeBox}>
                Welcome to our vacations Admin's management system.<br/>
                Only administrators can securely log in to manage and monitor vacations.<br/>
                Our system provides a real-time insights and statistics about the vacations status, 
                total number of users and likes, and a detailed breakdown of vacation destinations by popularity.<br/> 
                we are making sure you stay informed and make data-driven decisions effortlessly 🌅
            </Box>
            <Box sx={{
                ...styleHomeBox,
                p: 1,
                width: 'auto',
                }}>
                <img src={pieChartImage}/>
            </Box>
        </div>
    );
}
