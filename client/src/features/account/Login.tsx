import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import { FieldValues, useForm } from 'react-hook-form';
import agent from '../../app/api/agent';
import { LoadingButton } from '@mui/lab';

export default function Login() {
    const { register, handleSubmit, formState: { isSubmitting } } = useForm()

    async function submitForm(data: FieldValues) {
        await agent.Account.login(data)
    }

    return (
        <Container
            component={Paper}
            maxWidth="sm"
            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 4 }}
        >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign In
            </Typography>
            <Box component="form" onSubmit={handleSubmit(submitForm)} noValidate sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    // required
                    fullWidth
                    label="Username"
                    // autoComplete="username"
                    autoFocus
                    {...register('username')}
                />
                <TextField
                    margin="normal"
                    // required
                    fullWidth
                    type="password"
                    label="Password"
                    // autoComplete="current-password"
                    {...register('password')}
                />
                {/* <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    /> */}
                <LoadingButton
                    loading={isSubmitting}
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Sign In
                </LoadingButton>
                <Grid container>
                    {/* <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid> */}
                    <Grid item>
                        <Link to="/register">
                            {"Don't have an account? Sign Up"}
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}