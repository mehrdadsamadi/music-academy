import { Box } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import { Outlet } from "react-router-dom"

const MainLayout = () => {
    return (
        <>
            <Grid container>
                <Grid xs={3}>
                    {/* sidebar */}
                </Grid>
                <Grid xs={9}>
                    {/* navbar */}
                    <Box>
                        <Outlet />
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default MainLayout