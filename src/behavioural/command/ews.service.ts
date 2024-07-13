class EWSService {

    public addMember(contact: string, contactGroup: string): void {
        console.log(`Added ${contact} to ${contactGroup}.`);
    }

    public removeMember(contact: string, contactGroup: string): void {
        console.log(`Removed ${contact} from ${contactGroup}.`);
    }
};

export default EWSService;