interface ExhibitList {
    Id: number;
    Name: string;
    Description: string;
    Schedule: 'Ongoing' | 'Scheduled' | 'Ended';
    DatePosted: Date;
    Image: string;
    Participants: number;
}

type User = {
    Id: number;
    Username: string;
    Bid: number;
}