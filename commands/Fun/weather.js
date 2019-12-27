const got = require('got');

exports.run = async (client, msg) => {

let args = msg.content.split(" ").slice(1);

if (args.length < 1) return msg.channel.send(`-City is a required argument`, {code: "diff"}) 

const makeURL = (city) => `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22${encodeURIComponent(city)}%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`;
const celsius = (fahrenheit) => Math.round(((fahrenheit - 32) * 5) / 9);

const city = args.join(' ');
const res = await got(makeURL(city), { json: true });

if (!res || !res.body || !res.body.query || !res.body.query.results || !res.body.query.results.channel) {
        return msg.channel.send(`@ Failed to load weather info!`, {code: "py"})
    }

const weatherInfo = res.body.query.results.channel;
const forecast = weatherInfo.item.forecast[0];

msg.channel.send(`= Weather =

🌞 City Name ☁      :: ${weatherInfo.location.city}
🌞 Temperature ☁    :: ${weatherInfo.item.condition.temp}°F | ${celsius(weatherInfo.item.condition.temp)}°C
🌞 Condition ☁      :: ${weatherInfo.item.condition.text}
🌞 Humidity ☁       :: ${weatherInfo.atmosphere.humidity}%
🌞 Wind ☁           :: ${weatherInfo.wind.speed}mph*
🌞 Wind Direction ☁ :: ${weatherInfo.wind.direction}°
🌞 Forecast ☁       :: ${forecast.text}
🌞 Highest Temp ☁   :: ${forecast.high}°F | ${celsius(forecast.high)}°C
🌞 Lowest Temp ☁    :: ${forecast.low}°F | ${celsius(forecast.low)}°C
🌞 Sunrise ☁        :: ${weatherInfo.astronomy.sunrise}
🌞 Sunset ☁         :: ${weatherInfo.astronomy.sunset}`, {code: "asciidoc"})
}

exports.conf = {
  enabled: true,
  runIn: ["text", "dm", "group"],
  aliases: [],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
};

exports.help = {
  name: "weather",
  description: "Show weather info for city !",
  usage: "",
  usageDelim: " ",
};