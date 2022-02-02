import { Button, Center, Grid, Text, Container } from "@mantine/core";

export default function Login() {

    return (
        <>
            <Container>
                <Center my={"30px"} style={{ height: "70vh" }}>
                    <div>
                        <Center>
                            <Text component="span" style={{ fontSize: "2.5rem" }} variant={"text"} color={"yellow"} weight={"bolder"} align="center">
                                Open His Life (Dev)
                            </Text>
                        </Center>
                        <Center my={"30px"}>
                            <Button color="yellow" radius="lg" size="lg">
                                Login With Google
                            </Button>
                        </Center>
                    </div>
                </Center>
                <footer>
                    <Center my={"10px"}>
                        <Text color="yellow" component="span" align="center">
                            &copy; No Copyrights At All 2022 - Whatever
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