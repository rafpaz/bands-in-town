const bandsAPI = {
    endPoint: "https://rest.bandsintown.com/artists/%BAND%?app_id=string",
    endPointEvents: "https://rest.bandsintown.com/artists/%BAND%/events?app_id=string",
    apiFetch: function(url, value){
        let url = this.endPoint.replace("%TYPE%", type)
                                .replace("%VALUE%", value)
                                .replace("%LIMIT%", this.limit)
                                .replace("%POS%", this.pos)
                                ;
        return fetch(url).then(result => result.json());
    },
    search: function(query){
        let result = {};
        result.bandData = this.apiFetch(this.endPoint, query)
        return this.apiFetch("search", "q=" + query);
    }
};

export default bandsAPI;
