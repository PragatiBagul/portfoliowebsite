import './BlogPreview.css';
import { animated, useSpring } from "react-spring";
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const BlogsPreview = () => {
    const style = useSpring({
        from: {
          transform: "rotateY(0deg)"
        },
        transform: "rotateY(25deg)"
    });
    
    const [blogs, setBlogs] = useState(null);
    
    useEffect(() => {
        setTimeout(() => {
            fetch('https://api.jsonbin.io/b/61ddbae62675917a628ed3c0')
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    setBlogs(data.blogs);
                    console.log(data.blogs);
                })
        },1000);
    }, []);
    return (
        <div className='blogs'>
            <h1>Blogs</h1>
              {blogs && (<div className="container">
                  {blogs.map(blog => (
                      <animated.div
                          key={blog.id}
                          className="card"
                          style={{
                              ...style,
                          }}>
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
                      </animated.div>
                  ))}
              </div>)}
              </div>
      );        
}
export default BlogsPreview;