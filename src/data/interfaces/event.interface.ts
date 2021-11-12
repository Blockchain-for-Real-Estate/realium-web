export interface Event {
    eventType: string;
    listedPrice: number;
    purchasedPrice: number;
    quantity: number;
    txNFTId: string;
    txAvaxId: string;
    eventDateTime: Date;
    avalancheAssetId: string;
    token: number;
    property: number;
    tokenOwner: number;
    eventCreator: number;
}