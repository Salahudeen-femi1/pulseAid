import type { Donor, Filters } from "../lib/interfaces";

export function filterDonors(
    donors: Donor[],
    filters: Filters
) {

    return donors.filter((donor) => {

        const bloodMatch =

            !filters.bloodGroup ||

            donor.bloodGroup === filters.bloodGroup;

        const distanceMatch =

            donor.distance <= filters.radius;

        const availabilityMatch =

            !filters.available ||

            donor.available;

        return (

            bloodMatch &&

            distanceMatch &&

            availabilityMatch

        );

    });

}