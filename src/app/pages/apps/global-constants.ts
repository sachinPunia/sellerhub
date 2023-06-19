export class GlobalConstants {
    public apiURL: string = "https://sellershub.io/";
    public designation: string = "sellershub.io";
    public customerDashboard: boolean = true;
    public channelOrderDashboard: boolean = true;
    public channelUserDashboard: boolean = true;
    public releases: boolean = true;
    public isCollapsed: boolean = true;
    public companyInfo = {
        name: "Sellershub.io",
        country: ["United Kingdom", "United States"],
        address: [
            "450 Brook Drive, Greenpark, Reading, Berkshire, RG2 6UU",
            "2010 Crow Canyon Place Suite 100, San Ramon, California, 94583"
        ],
        telephone: ["+(44) 203 371 7255", "+(1) 925 217 1261"]
    }

    public dateMessage: string = new Date().toDateString();

    public setTimer() {
        setInterval(() => {
            let currentDate = new Date();
            this.dateMessage = currentDate.toDateString() + ' ' + currentDate.getHours() + ':' + currentDate.toLocaleTimeString();
        }, 1000);
    }
}



