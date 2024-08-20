import { Flex } from "@chakra-ui/react";

const ItemListContainer = ({greeting}) =>{
    return(
        <Flex height={"90vh"} alignItems={"center"} justifyContent={"center"}>{greeting}</Flex>
    )
}

export default ItemListContainer;