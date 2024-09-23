import {
    Box,
    Card,
    Stack,
    Heading,
    CardBody,
    Divider,
    CardFooter,
    ButtonGroup,
    Image,
    Text,
  } from "@chakra-ui/react";
  
  import { Link } from "react-router-dom";

export const ItemListContainer = ({ products }) => {
  return (
    <Box display={"flex"} flexWrap={"wrap"}>
      {products.map((product) => (
        <Card key={product.id} maxW="sm" margin={"1rem"}>
          <CardBody>
            <Image
              src={product.thumbnail}
              alt={product.name}
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">{product.title}</Heading>
              <Text>{product.description}</Text>
              <Text color="blue.600" fontSize="2xl">
                {product.price}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              {/* <Button variant="ghost" colorScheme="blue">
                Add to cart
              </Button> */}
              <Link to={`/item/${product.id}`}>
                {" "}
                Ir a detalle del producto{" "}
              </Link>
            </ButtonGroup>
          </CardFooter>
        </Card>
      ))}
    </Box>
  );
};


  //import { Link } from "react-router-dom" from "@chakra-ui/react";

/*
import { Flex } from "@chakra-ui/react";

export const ItemListContainer = ({products}) =>{
    return(
        <Flex 
        height={"90vh"} 
        alignItems={"center"} 
        justifyContent={"center"}>
            {greeting}
        </Flex>
    )
}


{products.map((product)=>{
                return(
                    <Box>
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>{product.price}</p>
                    </Box>
                )
            })
        }
*/