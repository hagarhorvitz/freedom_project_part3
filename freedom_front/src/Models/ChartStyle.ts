
export const chartBox = {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: 3,
    borderRadius: 5,
    py: 2,
    m: 2,
    width: 'auto',
    boxSizing: 'border-box',
    overflow: 'auto',
    '.MuiBarLabel-root': {
        fill: '#fdfdfd !important'
    },
};

export const chartButton = {
    color: '#037a85',
    '&:hover': {
        color: '#fdfdfd',
        backgroundColor: '#048591', 
        cursor: 'pointer',
    },
}