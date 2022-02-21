/* eslint-disable consistent-return */
import axios from 'axios';

export const getPlacesData = async (type, sw, ne) => {
  try {
    // request the restaraunt/hotel/attraction information given the bound (southwest corner and northeast corner)
    const {
      data: {
        data
      }
    } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
      params: {
        bl_latitude: sw.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        tr_latitude: ne.lat,
      },
      headers: {
        'x-rapidapi-key': process.env.REACT_APP_RAPID_API_TRAVEL_API_KEY,
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      },
    });
    // data object sample
    // address: "Km 13 + 600 Via Bogota/ Villavicencio, Chipaque 11212 Colombia"
    // address_obj: {street1: "Km 13 + 600 Via Bogota/ Villavicencio", street2: null, city: "Chipaque", state: null, country: "Colombia", …}
    // ancestors: [Object, Object, Object] (3)
    // awards: [] (0)
    // bearing: "southeast"
    // category: {key: "restaurant", name: "Restaurant"}
    // cuisine: [{key: "10749", name: "South American"}, {key: "10757", name: "Colombian"}] (2)
    // description: ""
    // dietary_restrictions: [] (0)
    // distance: "0.17922940364475515"
    // distance_string: "0.2 km"
    // doubleclick_zone: "sa.colombia"
    // establishment_types: [{key: "10591", name: "Restaurants"}] (1)
    // is_candidate_for_contact_info_suppression: false
    // is_closed: false
    // is_jfy_enabled: false
    // is_long_closed: false
    // latitude: "-7.78E-4"
    // location_id: "15710803"
    // location_string: "Chipaque, Cundinamarca Department"
    // longitude: "0.00141"
    // name: "La Vaqueria Express"
    // nearest_metro_station: [] (0)
    // num_reviews: "3"
    // parent_display_name: "Chipaque"
    // phone: "+57 310 5560904"
    // photo: {images: Object, is_blessed: false, uploaded_date: "2020-09-07T12:14:54-0400", caption: "Hola,hemos estado comiendo en el restaurante La Ba…siada sal gruesa...en general,muy bien,volveremos", id: "469057397", …}
    // preferred_map_engine: "default"
    // price_level: ""
    // ranking: "#2 of 2 Restaurants in Chipaque"
    // ranking_category: "restaurant"
    // ranking_denominator: "2"
    // ranking_geo: "Chipaque"
    // ranking_geo_id: "7219897"
    // ranking_position: "2"
    // rating: "3.0"
    // raw_ranking: "2.986666440963745"
    // subcategory: [] (0)
    // timezone: "America/Bogota"
    // web_url: "https://www.tripadvisor.com/Restaurant_Review-g7219897-d15710803-Reviews-La_Vaqueria_Express-Chipaque_Cundinamarca_Department.html"
    // website: "https://www.facebook.com/pages/category/Restaurant/La-Vaqueria-Express-583310798687336/"
    // write_review: "https://www.tripadvisor.com/UserReview-g7219897-d15710803-La_Vaqueria_Express-Chipaque_Cundinamarca"
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getWeatherData = async (lat, lng) => {
  try {
    if (lat && lng) {
      const {
        data
      } = await axios.get('https://community-open-weather-map.p.rapidapi.com/find', {
        params: {
          lat,
          lon: lng
        },
        headers: {
          'x-rapidapi-key': process.env.REACT_APP_RAPID_API_WEATHER_API_KEY,
          'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
        },
      });

      return data;
    }
  } catch (error) {
    console.log(error);
  }
};