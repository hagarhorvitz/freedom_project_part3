import { Box } from "@mui/material";
import css from "./AboutPage.module.css";

export function AboutPage(): JSX.Element {

    const styleAboutMeBox = {
        boxShadow: 5,
        borderRadius: 3,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        p: 2,
        pb: 3.5,
        m: 1,
        width: 500,
        height: 480,
        textAlign: 'center',
        alignItems: 'center',
        overflow: 'auto',
        boxSizing: 'border-box',
    };

    return (
        <div className={css.AboutPage}>
            <Box sx={styleAboutMeBox}>
                <h3>Hey! I'm Hagar🌻</h3>
                I’m a passionate full-stack developer with a strong work ethic and a talent for creative problem-solving.<br/> 
                Skilled in both front-end and back-end development, and enjoy bringing projects to life through clean, efficient code and user-centered design.<br/> 
                My self-learning abilities and adaptability allow me to quickly master new technologies, 
                while my resilience and composure under pressure enable me to tackle complex challenges with confidence.<br/> 
                I thrive working independently or collaborating within a teamwork, always committed to delivering high-quality solutions.<br/> 
                Outside of coding, I’m a proud dog owner and find inspiration in life’s small moments.
                <br/>🎗️
            </Box>
        </div>
    );
}
