export default class Constant {
    static serviceURL = "http://localhost:8080";

    static getSideMenus() {
        return [
            { key: 0, name: "Inform", href: "/InformPage" },
            { key: 1, name: "Login", href: "/LoginPage" },
            { key: 2, name: "Inquiry", href: "/InquiryPage" },
            { key: 3, name: "Mypage", href: "/MyPage" },
            // { key: 4, name: "Signup", href: "/SignupPage" },
        ];
    }

    static getHowManyBed() {
        return [
            { key: 0, value: 0, name: "Select Bed Type" },
            { key: 1, value: 1, name: "Single Bed" },
            { key: 2, value: 2, name: "Double Bed" },
            { key: 3, value: 2, name: "Twin Bed" },
            { key: 4, value: 3, name: "Triple Bed" },
            { key: 5, value: 4, name: "Family Bed" },
        ];
    }
}