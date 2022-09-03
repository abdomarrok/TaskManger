import React, { useEffect } from "react";
import {
    Button,
    Box,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import useRequestResource from "src/hooks/useRequestResource";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function Categories() {
    const { resourceList, getResourceList } = useRequestResource({ endpoint: "categories" });
    useEffect(() => {
        getResourceList();
    }, [getResourceList]);
    return (
        <div>
            <Box
                xs={{
                    display: "flex",
                    justifyContent: "flex-end",
                    mb: 4,
                    mt: 4,
                }}
            >
                <Button
                    component={Link}
                    variant='contained'
                    color='primary'
                    to='/categories/create'
                >
                    Create
                </Button>
            </Box>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 360 }} size='small'>
                    <TableHead>
                        <TableRow>
                            <TableCell align='left'>Name</TableCell>
                            <TableCell align='left'>Color</TableCell>
                            <TableCell align='left'>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {resourceList.results.map((r) => {
                            return (
                                <TableRow key={r.id}>
                                    <TableCell align='left'>{r.name}</TableCell>
                                    <TableCell align='left'>{r.color}</TableCell>

                                    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                                        <Link to={`/categories/edit/${r.id}`} key='category-edit'>
                                            <IconButton size='large'>
                                                <EditIcon />
                                            </IconButton>
                                        </Link>
                                        <IconButton size='large' onClick={null}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </Box>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
