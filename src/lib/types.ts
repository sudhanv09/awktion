interface ExhibitList {
    Id: number;
    Name: string;
    Description: string;
    Schedule: 'Ongoing' | 'Scheduled' | 'Ended';
    DatePosted: string;
    Image: string;
    Participants: number;
    HighestBidder?: string;
    WinningBid?: number
}

interface User {
    Id: number;
    Username: string;
    Bid: number;
}