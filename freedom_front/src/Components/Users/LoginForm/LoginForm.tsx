import { useContext, useEffect, useState} from "react";
import css from "./LoginForm.module.css";
import { CredentialModel } from "../../../Models/CredentialModel";
import { userService } from "../../../Services/UserService";
import { useNavigate } from "react-router-dom";
import { Box, Button, IconButton, InputAdornment, InputLabel, OutlinedInput, Stack } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import NotifyContext from "../../../Context/NotifyContext";

export function LoginForm(): JSX.Element {

    const notify = useContext(NotifyContext);
    const [credentials, setCredentials] = useState<CredentialModel>({email: '', password: ''});
    const [disable, setDisable] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [isPressed, setIsPressed] = useState(false);
    const [objError, setObjError] = useState({
        emailError: false,
        passwordError: false
    });

    function checkError() {
        (credentials?.email?.length < 5 && credentials?.email?.length != 0) ? objError.emailError = true : objError.emailError = false;
        (credentials?.password?.length < 5 && credentials?.password?.length != 0) ? objError.passwordError = true : objError.passwordError = false;
        setObjError({ ...objError });
    };

    function checkEnable(){
        (credentials?.email?.length > 5 && credentials?.password?.length >= 6) ? setDisable(false) : setDisable(true);
    };

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            setIsPressed(true);
            log_in();
        }
    };

    useEffect(() => {
        if (isPressed) {
            const timeoutId = setTimeout(() => {
                setIsPressed(false);
            }, 200);
            return () => clearTimeout(timeoutId);
        }
    }, [isPressed]);

    const styleBox = {
        border: '2px solid #004a4d33',
        borderRadius: 3,
        boxShadow: 7,
        display: 'flex',
        alignContent: 'center',
        flexDirection: 'column',
        p: 5,
        width: '45%',
        m: 'auto',
        gap: 3,
    };
    const styleLabel = {
        color: "#004a4d",
        alignSelf: 'flex-start',
        paddingLeft: 1,
        fontSize: 'large',
        fontWeight: '500',
    };
    const styleButton = {
        width: '50%',
        alignSelf: 'center',
        marginTop: 1,
        backgroundColor: isPressed ? '#006064' : '#048591',
        '&:hover': {
            backgroundColor: '#006064', 
            cursor: 'pointer',
        },
    };
    const styleInputColors = (fieldError: boolean)=> ({
        '& .MuiOutlinedInput-notchedOutline': {
        borderColor: fieldError ? '#b71c1c8c' : '#004a4d81',
        },
        '&.Mui-error .MuiOutlinedInput-notchedOutline': {
            borderColor: '#b71c1c8c',
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: fieldError ? '#b71c1c' : '#00838f',
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: fieldError ? '#b71c1c' : '#00838f',
        },
        '& .MuiOutlinedInput-input': {
            color: fieldError ? '#b71c1c' : '#004a4d',
            fontSize: 'large',
        },
    });

    const navigate = useNavigate();
    async function log_in() {
        try {
            await userService.login(credentials)
            notify.success("Login successfully!", 4000)
            navigate("/home")
        }
        catch (err: any) {
            notify.error(err, 4500);
        }
    };

    return (
        <div className={css.LoginForm}>
            <Box component="form"
                autoComplete="on"
                sx={styleBox}
                onKeyDown={handleKeyDown}>

                <Stack direction='column'>
                    <InputLabel htmlFor="emailBox"
                        sx={styleLabel}>
                            Email:
                    </InputLabel>
                    <OutlinedInput required
                        error={objError.emailError}
                        id="emailBox"
                        type="email"
                        name="email"
                        value={credentials?.email}
                        onChange={(e)=> setCredentials({...credentials, email: e.target.value})}
                        onKeyDown={checkError}
                        onKeyUp={checkEnable}
                        sx={styleInputColors(objError.emailError)}/>
                </Stack>

                <Stack direction='column'>
                    <InputLabel htmlFor="passwordBox"
                        sx={styleLabel}>
                            Password:
                    </InputLabel>
                    <OutlinedInput required
                        error={objError.passwordError}
                        id="passwordBox"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment= {
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    onMouseUp={handleMouseUpPassword}
                                    edge="end" >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment> }
                        value={credentials?.password}
                        onChange={(e)=> setCredentials({...credentials, password: e.target.value})}
                        onKeyDown={checkError}
                        onKeyUp={checkEnable}
                        sx={styleInputColors(objError.passwordError)}/>
                </Stack>

                <Button variant="contained" 
                    sx={styleButton} 
                    size="large"
                    disabled={disable}
                    onClick={log_in}
                    >
                        Login
                </Button>
            </Box>
        </div>
    );
}
