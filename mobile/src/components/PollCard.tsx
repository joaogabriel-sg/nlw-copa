import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Heading, HStack, Text, VStack } from "native-base";

import { Participants, ParticipantProps } from "./Participants";

export interface PollCardProps {
  id: string;
  code: string;
  title: string;
  ownerId: string;
  createdAt: string;
  owner: {
    name: string;
  };
  participant: ParticipantProps[];
  _count: {
    participant: number;
  };
}

interface Props extends TouchableOpacityProps {
  data: PollCardProps;
}

export function PollCard({ data, ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <HStack
        w="full"
        h={20}
        bgColor="gray.800"
        borderBottomWidth={3}
        borderBottomColor="yellow.500"
        justifyContent="space-between"
        alignItems="center"
        rounded="sm"
        mb={3}
        p={4}
      >
        <VStack>
          <Heading color="white" fontSize="md" fontFamily="heading">
            {data.title}
          </Heading>

          <Text color="gray.200" fontSize="xs">
            Criado por {data.owner.name}
          </Text>
        </VStack>

        <Participants
          count={data._count.participant}
          participants={data.participant}
        />
      </HStack>
    </TouchableOpacity>
  );
}
