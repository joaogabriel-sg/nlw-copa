import { Center, Icon, Text } from "native-base";
import { Fontisto } from "@expo/vector-icons";

import { Button } from "../components/Button";
import { useAuth } from "../hooks/useAuth";

import Logo from "../assets/logo.svg";

export function SignIn() {
  const { signIn } = useAuth();

  return (
    <Center flex={1} bgColor="gray.900" p={7}>
      <Logo width={212} height={40} />

      <Button
        type="SECONDARY"
        title="Entrar com o Google"
        leftIcon={<Icon as={Fontisto} name="google" color="white" size="md" />}
        mt={12}
        onPress={signIn}
      />

      <Text color="gray.200" textAlign="center" mt={4}>
        Não utilizamos nenhuma informação além{"\n"}
        do seu e-mail para criação de sua conta.
      </Text>
    </Center>
  );
}
