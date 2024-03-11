import ProductCard from "../components/ProductCard";
import { useProductStore } from "../store/useProductStore";

import { Box, Grid, Typography } from "@mui/material";

const Home = () => {
  const products = useProductStore((state) => state.product);
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        mt: "30px",
      }}
    >
      <Typography variant="h4" component="h2" gutterBottom>
        Product List
      </Typography>

      <Grid
        container
        justifyContent="center"
        alignItems="center"
        maxWidth="85%"
        margin="auto"
        // spacing={2}
      >
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

// take the data
// const productsArray = products;
//   return (
//     <div>
//       {products.map((product) => (
//         <ProductCard key={product.id} product={product} />
//       ))}
//     </div>
//   );
// };

//origin
//     <Box
//       sx={{
//         width: "100%",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         flexDirection: "column",
//         mt: "30px",
//       }}
//     >
//       <Typography variant="h4" component="h2" gutterBottom>
//         Product List
//       </Typography>

//       <Grid
//         container
//         justifyContent="center"
//         alignItems="center"
//         maxWidth="85%"
//         margin="auto"
//       >
//         {productsArray.map((product) => (
//           <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
//             <ProductCard
//               // key={products.id}
//               imageUrl={product.imageUrl}
//               productName={product.productName}
//               price={product.price}
//               brief={product.brief}
//             />
//           </Grid>
//         ))}
//       </Grid>
//       <div>
//         {products.map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     </Box>
//   );
// };

export default Home;
