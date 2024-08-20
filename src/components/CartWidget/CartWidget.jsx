import { Flex,Button,Text } from "@chakra-ui/react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const CartWidget = () => {
    return(
        <Flex >
            <Button>
            <Text>0</Text>
            <AiOutlineShoppingCart size={"2rem"} />
            </Button>
        </Flex>
    )
}

export default CartWidget;