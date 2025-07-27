import React, { useEffect, useState } from "react";

import Service from "../utils/http";
import { Avatar, Box, Center, Text, Container, Stack } from "@mantine/core";
const service = new Service();

export default function Profile() {
  const [ProfileData, setProfileData] = useState(null);

  async function getProfileData() {
    let data = await service.get("user/me");
    setProfileData(data);
  }

  useEffect(() => {
    getProfileData();
  }, []);

  if (!ProfileData) {
    return (
      <Center style={{ height: "100vh" }}>
        <Text>Loading...</Text>
      </Center>
    );
  }

  const avsc = ProfileData ? ProfileData.avatar : undefined;

  return (
    <div>
      <Container size={"sm"}>
        <Stack
          h={300}
          bg="var(--mantine-color-body)"
          align="center"
          justify="center"
          gap="md"
        >
          <Avatar
            variant="outline"
            radius="xl"
            size="xl"
            color="red"
            src={avsc}
          />

          <Text ta="center">{ProfileData?.name}</Text>
          <Text ta="center" style={{ marginTop: "10px" }}>
            {ProfileData?.email}
          </Text>
          <Text ta="center" style={{ marginTop: "10px" }}>
            <strong>User Id: </strong>
            {ProfileData?._id}
          </Text>
        </Stack>
      </Container>
    </div>
  );
}
