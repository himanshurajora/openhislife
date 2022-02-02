import { Button, Center, Grid, Text, Container } from "@mantine/core";

export default function Login() {

    return (
        <>
            <Container>
                <Center my={"30px"} style={{ height: "70vh" }}>
                    <div>
                        <Text component="span" style={{ fontSize: "3rem" }} variant={"text"} color={"yellow"} weight={"bolder"} align="center">
                            Open His Life
                        </Text>
                        <br />
                        <Center my={"30px"}>
                            <Button color="yellow" radius="lg" size="lg">
                                Login
                            </Button>
                        </Center>
                    </div>
                </Center>
                <footer>
                    <Center my={"10px"}>
                        <Text color="yellow" component="span">
                            &copy; No Copyrights At All 2021 - Whatever
                        </Text>
                    </Center>
                    <Center my={"10px"}>
                        <Text color="yellow" size={"xs"} component="span" align="center">
                            And we are not racists, "His" can be replaced with "Her"
                        </Text>
                    </Center>

                </footer>
            </Container>
        </>

    )


}