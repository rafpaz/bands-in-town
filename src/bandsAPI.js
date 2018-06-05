const bandsAPI = {
    endPoint: "https://rest.bandsintown.com/artists/%BAND%?app_id=string",
    endPointEvents: "https://rest.bandsintown.com/artists/%BAND%/events?app_id=string",
    apiFetch: async function(url, query){
        url = url.replace("%BAND%", query);
        return fetch(url).then(result => result.json());
    },
    search: async function(query){
        let result = {};
        result.bandData = await this.apiFetch(this.endPoint, query);
        result.eventsData = await this.apiFetch(this.endPointEvents, query);
        return result;
    }
};

export default bandsAPI;
