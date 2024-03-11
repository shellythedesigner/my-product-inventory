import { Box, Grid, Typography, Button } from "@mui/material";

const ProductDetail = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "50px",
      }}
    >
      <Grid container spacing={10} maxWidth="85%">
        <Grid item xs={12} md={6}>
          <img
            src="https://www.cookmuseum.org/wp-content/uploads/2020/09/air-image-cropped.jpg"
            alt="Product Image"
            style={{ width: "100%", height: "auto" }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            "flex-direction": "column",
          }}
        >
          <Typography variant="h4" component="h2" gutterBottom align="center">
            Canada Snowy Scent
          </Typography>
          <Typography
            variant="body1"
            component="p"
            align="center"
            sx={{ color: "#a7a7a7" }}
          >
            A breath of fresh, 100% Nature.
          </Typography>
          <Typography variant="h5" component="h3" gutterBottom align="center">
            CA$ 99999
          </Typography>
          <Typography variant="body1" component="p" align="left">
            The Canada Air, a breath of fresh, mmerse yourself in the essence of
            the Great White North with our premium-quality air. Buy it now! Why
            wait?
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
              mt: "20px",
            }}
          >
            <Button
              variant="contained"
              color="primary"
              sx={{
                backgroundColor: "#027a9c",
                "&:hover": { backgroundColor: "#00566e" },
              }}
            >
              Edit
            </Button>
            <Button
              variant="contained"
              color="secondary"
              sx={{
                backgroundColor: "#027a9c",
                "&:hover": { backgroundColor: "#00566e" },
              }}
            >
              Delete
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductDetail;
// This page will list the information of a single product
// (name, description, price, image).  Each product has options to edit or delete.
