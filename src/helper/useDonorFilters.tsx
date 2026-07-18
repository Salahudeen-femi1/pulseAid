import { useMemo, useState } from "react";

import type { Donor } from "../lib/interfaces";
import { filterDonors } from "./filterDonors";

export default function useDonorFilters(donors: Donor[]) {
  const [bloodGroup, setBloodGroup] = useState<string | null>(null);
  const [radius, setRadius] = useState<number>(25);
  const [available, setAvailable] = useState<boolean>(false);

  const filteredDonors = useMemo(() => {
    return filterDonors(donors, {
      bloodGroup,
      radius,
      available,
    });
  }, [donors, bloodGroup, radius, available]);

  const resetFilters = () => {
    setBloodGroup(null);
    setRadius(25);
    setAvailable(false);
  };

  return {
    donors: filteredDonors,
    bloodGroup,
    radius,
    available,
    setBloodGroup,
    setRadius,
    setAvailable,
    resetFilters,
  };
}