import React, { Component } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material";
const Blog = ({ blogs, handleDelete }) =>{
    return (
        <div className="blog-list">
        <Grid container rowSpacing={3} columnSpacing={3}>
            {blogs.map(blog => (
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={blog.id}>
                <Card sx={{ maxWidth: 345 }}>
                              <CardMedia
                                  component="img"
                                  height="140"
                                  image={blog.image}
                                  alt="" />
                              <CardContent>
                                  <Typography gutterBottom variant="h5" component="div">
                                      {blog.title}
                                  </Typography>
                                  <Typography variant="body2" color="text.secondary">
                                      {blog.description}
                                  </Typography>
                              </CardContent>
                              <CardActions>
                                  <Button size="small" variant="contained">Read</Button>
                              </CardActions>
                          </Card>
                </Grid>    
            ))}
        </Grid>
      </div>);
    }
 
export default Blog;