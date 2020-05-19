class PlacesCity {
    constructor(
        placesCityId, 
        cityId, 
        placesCityName, 
        affordability, 
        complexity, 
        imageUrl, 
        duration, 
        ingredients, 
        steps,
        visiteTime,
        enteryPrice,
        webSite,
        address,
        phone,
        mail,
        placesCityLatitude,
        placesCityLongitude,
        ownerId,
    ) {
        this.placesCityId = placesCityId;
        this.cityId = cityId;
        this.placesCityName = placesCityName;
        this.affordability = affordability;
        this.complexity = complexity;
        this.imageUrl = imageUrl;
        this.duration = duration;
        this.ingredients = ingredients;
        this.steps = steps;
        this.visiteTime = visiteTime;
        this.enteryPrice = enteryPrice;
        this.webSite = webSite;
        this.address = address;
        this.phone = phone;
        this.mail = mail;
        this.placesCityLatitude = placesCityLatitude;
        this.placesCityLongitude = placesCityLongitude;
        this.ownerId = ownerId;
    }
}

export default PlacesCity;