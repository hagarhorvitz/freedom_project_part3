class DevelopmentAppConfig {
    public readonly loginUrl = "http://127.0.0.1:8000/api/login/";
    public readonly logoutUrl = "http://127.0.0.1:8000/api/logout/";
    public readonly totalVacationsUrl = "http://127.0.0.1:8000/api/total_vacations/";
    public readonly totalUsersUrl = "http://127.0.0.1:8000/api/total_users/";
    public readonly totalLikesUrl = "http://127.0.0.1:8000/api/total_likes/";
    public readonly totalCountryLikesUrl = "http://127.0.0.1:8000/api/total_country_likes/";
}

// class ProductionAppConfig {
//     public readonly loginUrl = "http://<cloud-ip-address>:8000/api/login/";
//     public readonly logoutUrl = "http://<cloud-ip-address>:8000/api/logout/";
//     public readonly totalVacationsUrl = "http://<cloud-ip-address>:8000/api/total_vacations/";
//     public readonly totalUsersUrl = "http://<cloud-ip-address>:8000/api/total_users/";
//     public readonly totalLikesUrl = "http://<cloud-ip-address>:8000/api/total_likes/";
//     public readonly totalCountryLikesUrl = "http://<cloud-ip-address>:8000/api/total_country_likes/";
// }

const appConfig = new DevelopmentAppConfig();
// const appConfig = new ProductionAppConfig();

export default appConfig;