import React, { useEffect, useState } from "react";

import Service from "../utils/http";
import { Avatar, Box, Center, Text } from "@mantine/core";
const service = new Service();

export default function Profile() {
  const [ProfileData, setProfileData] = useState(null);

  async function getProfileData() {
    let data = await service.get("user/me");
    setProfileData(data);
    console.log("hii", data);
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

  return (
    <div>
      <Center maw={1000} h={50}>
        <Avatar
          src={ProfileData?.avatar}
          alt="it's me"
          style={{ marginTop: "500px" }}
        />
      </Center>

      <Text size="xl" ta="center" style={{ marginTop: "250px" }}>
        <Text ta="center">{ProfileData?.name}</Text>
      </Text>
      <Text ta="center" style={{ marginTop: "10px" }}>
        {ProfileData?.email}
      </Text>
      
    </div>
  );
}
