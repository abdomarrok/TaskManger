import React, { useState } from "react";
import { Formik } from "formik";
import { Grid, TextField, Typography, Paper, Button, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import useRequestResource from "src/hooks/useRequestResource";

export default function CategoryDetails() {
    const { addResource } = useRequestResource({ endpoint: "categories" });
    const [initialValues, setInitialValues] = useState({
        name: "",
        color: "",
    });
    const navigate = useNavigate();
    const handleSubmit = ( values) => {
     
        addResource(values, () => {
            navigate("/categories");
        });
    };
    return (
        <Paper
            sx={{
                borderRadius: "2px",
                boxShadow: (theme) => theme.shadows[5],
                padding: (theme) => theme.spacing(2, 4, 3),
            }}
        >
            <Typography variant='h6' mb={4}>
                Ceate Category
            </Typography>
            <Formik onSubmit={handleSubmit}  initialValues={initialValues}>
                {(formik) => {
                    return (
                        <form onSubmit={formik.handleSubmit}>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        id='name'
                                        label='Name'
                                        {...formik.getFieldProps("name")}
                                        error={formik.touched.name && Boolean(formik.errors.name)}
                                        helperText={formik.touched.name && formik.errors.name}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        id='color'
                                        label='Color'
                                        {...formik.getFieldProps("color")}
                                        error={formik.touched.color && Boolean(formik.errors.color)}
                                        helperText={formik.touched.color && formik.errors.color}
                                    />
                                </Grid>
                                <Grid item>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            margin: (theme) => theme.spacing(3),
                                        }}
                                    >
                                        <Button
                                            Component={Link}
                                            to='/categories'
                                            size='medium'
                                            variant='outlined'
                                            sx={{ mr: 2 }}
                                        >
                                            back
                                        </Button>
                                        <Button
                                            Component={Link}
                                            type='submit'
                                            size='medium'
                                            variant='contained'
                                            color='primary'
                                        >
                                            submit
                                        </Button>
                                    </Box>
                                </Grid>
                            </Grid>
                        </form>
                    );
                }}
            </Formik>
        </Paper>
    );
}
