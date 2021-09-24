export interface Property {
    propertyName: string;
    propertyTypeId: number;
    listingType: string;
    propertyType: string;
    legalTypeId: number;
    avalancheAssetId: string;
    parcelId: string;
    streetAddress: string;
    city: string;
    state: string;
    zipCode: string;
    funded: number;
    forcastedIncome: number;
    minInvestment: number;
    maxInvestment: number;
    yearBuilt: number;
    country: string;
    acerage: number;
    llc: string;
    seriesCount: number;
    details: {
        bedrooms: number;
        bathrooms: number;
        area: number;
        lot: number;
        parking: number;
        investment: string;
        totalCapitalization: number;
        netOperatingIncome: number;
        estimatedAppreciation: number;
        managementTeam: string;
    }
}
