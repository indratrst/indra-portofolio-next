"use client";
import React from "react";

import { AppShell } from "../layouts/AppShell";
import { OrganismShell } from "../organism/OrganismShell";

const Main = () => {
  return (
    <AppShell>
      <OrganismShell />
    </AppShell>
  );
};

export default Main;
