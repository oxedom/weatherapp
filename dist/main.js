(() => {
  "use strict";
  const e = {
    events: {},
    subscribe(e, t) {
      console.log(`PUBSUB: someone just subscribed to know about ${e}`),
        (this.events[e] = this.events[e] || []),
        this.events[e].push(t);
    },
    unsubscribe(e, t) {
      console.log(`PUBSUB: someone just UNsubscribed from ${e}`),
        this.events[e] &&
          (this.events[e] = this.events[e].filter((e) => e !== t));
    },
    publish(e, t) {
      console.log(`PUBSUB: Making an broadcast about ${e} with ${t}`),
        this.events[e] &&
          this.events[e].forEach((e) => {
            e(t);
          });
    },
  };
  const t = {
    getFormData(e) {
      const t = new FormData(e.target);
      return Object.fromEntries(t);
    },
  };
  e.subscribe("citySearch", async (t) => {
    let s = await (function () {
      let e = "82dbf781a95c7b01a16d7fdaaf1b552c",
        t = async (e, t) => {
          try {
            console.log("API Fetcher has fired");
            const s = await fetch(`${e}${t}`);
            return await s.json();
          } catch (e) {
            return console.log(e), "ERROR";
          }
        };
      return {
        cityWeather: async (s) => {
          const a = await (async (s) => (
              console.log("GEO Fetcher has fired"),
              t(`http://api.openweathermap.org/geo/1.0/direct?q=${s}&appid=`, e)
            ))(s),
            o = { lat: a[0].lat, lon: a[0].lon };
          return await (async (s) => (
            console.log("Weather Fetcher has fired"),
            t(
              `https://api.openweathermap.org/data/2.5/weather?lat=${s.lat}&&lon=${s.lon}&appid=`,
              e
            )
          ))(o);
        },
      };
    })().cityWeather(t);
    e.publish("cityDataReturned", s);
  }),
    document.getElementById("h1"),
    document.getElementById("form").addEventListener("submit", (s) => {
      s.preventDefault();
      let a = t.getFormData(s);
      e.publish("citySearch", a.citySearch);
    }),
    e.subscribe(
      "cityDataReturned",
      ({ name: e, weather: t, main: s, wind: a }) => {
        console.log(e), console.log(t), console.log(s), console.log(a);
      }
    );
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBQU8sTUFBTUEsRUFBUyxDQUNwQkMsT0FBUSxDQUFDLEVBQ1RDLFVBQVVDLEVBQVFDLEdBQ2hCQyxRQUFRQyxJQUFJLGlEQUFpREgsS0FFN0RJLEtBQUtOLE9BQU9FLEdBQVVJLEtBQUtOLE9BQU9FLElBQVcsR0FDN0NJLEtBQUtOLE9BQU9FLEdBQVFLLEtBQUtKLEVBQzNCLEVBQ0FLLFlBQVlOLEVBQVFDLEdBQ2xCQyxRQUFRQyxJQUFJLDBDQUEwQ0gsS0FFbERJLEtBQUtOLE9BQU9FLEtBQ2RJLEtBQUtOLE9BQU9FLEdBQVVJLEtBQUtOLE9BQU9FLEdBQVFPLFFBQVFDLEdBQU1BLElBQU1QLElBRWxFLEVBQ0FRLFFBQVFULEVBQVFVLEdBQ2RSLFFBQVFDLElBQUkscUNBQXFDSCxVQUFlVSxLQUU1RE4sS0FBS04sT0FBT0UsSUFDZEksS0FBS04sT0FBT0UsR0FBUVcsU0FBU0gsSUFDM0JBLEVBQUVFLEVBQUssR0FHYixHQ2xCRixNQUFNRSxFQUFPLENBQ1RDLFlBQVlDLEdBQ1IsTUFBTUMsRUFBVyxJQUFJQyxTQUFTRixFQUFNRyxRQUVwQyxPQURrQkMsT0FBT0MsWUFBWUosRUFFekMsR0FVQWxCLEVBQU9FLFVBQVUsY0FMQXFCLE1BQU9DLElBQ3BCLElBQUlYLFFDZEwsV0FFTCxJQUFJWSxFQ0hDLG1DREtEQyxFQUFhSCxNQUFPSSxFQUFNQyxLQUM1QixJQUNFdkIsUUFBUUMsSUFBSSx5QkFDWixNQUFNdUIsUUFBZ0JDLE1BQU0sR0FBR0gsSUFBT0MsS0FFdEMsYUFEbUJDLEVBQVFFLE1BSzdCLENBSEUsTUFBT0MsR0FFUCxPQURBM0IsUUFBUUMsSUFBSTBCLEdBQ0wsT0FDVCxHQXdCRixNQUFPLENBQUVDLFlBVFNWLE1BQU9XLElBRXZCLE1BQU1DLE9BZFNaLE9BQU9XLElBQ3RCN0IsUUFBUUMsSUFBSSx5QkFFTG9CLEVBRE0sa0RBQWtEUSxXQUNyQ1QsSUFXSFcsQ0FBV0YsR0FDNUJHLEVBQVksQ0FBRUMsSUFBS0gsRUFBUyxHQUFHRyxJQUFLQyxJQUFLSixFQUFTLEdBQUdJLEtBRzNELFlBWm1CaEIsT0FBT2lCLElBQzFCbkMsUUFBUUMsSUFBSSw2QkFFTG9CLEVBRFUsdURBQXVEYyxFQUFNRixZQUFZRSxFQUFNRCxhQUNsRWQsSUFRSmdCLENBQWVKLEVBQ3ZCLEVBSXRCLENEeEJ5QkssR0FBZ0JULFlBQVlULEdBQzdDeEIsRUFBT1ksUUFBUSxtQkFBb0JDLEVBQUksSUFXbEM4QixTQUFTQyxlQUFlLE1BQ3RCRCxTQUFTQyxlQUFlLFFBRzlCQyxpQkFBaUIsVUFBV0MsSUFDN0JBLEVBQUVDLGlCQUNGLElBQUlsQyxFQUFPRSxFQUFLQyxZQUFZOEIsR0FDNUI5QyxFQUFPWSxRQUFRLGFBQWNDLEVBQUttQyxXQUFVLElBVWhEaEQsRUFBT0UsVUFBVSxvQkFQQSxFQUFHK0MsT0FBTUMsVUFBU0MsT0FBTUMsV0FDckMvQyxRQUFRQyxJQUFJMkMsR0FDWjVDLFFBQVFDLElBQUk0QyxHQUNaN0MsUUFBUUMsSUFBSTZDLEdBQ1o5QyxRQUFRQyxJQUFJOEMsRUFBSyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9qcy9wdWJzdWIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9qcy9kb20uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9qcy9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9qcy9kYi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgcHVic3ViID0ge1xuICBldmVudHM6IHt9LFxuICBzdWJzY3JpYmUoZXZOYW1lLCBmbikge1xuICAgIGNvbnNvbGUubG9nKGBQVUJTVUI6IHNvbWVvbmUganVzdCBzdWJzY3JpYmVkIHRvIGtub3cgYWJvdXQgJHtldk5hbWV9YCk7XG4gICAgLy8gYWRkIGFuIGV2ZW50IHdpdGggYSBuYW1lIGFzIG5ldyBvciB0byBleGlzdGluZyBsaXN0XG4gICAgdGhpcy5ldmVudHNbZXZOYW1lXSA9IHRoaXMuZXZlbnRzW2V2TmFtZV0gfHwgW107XG4gICAgdGhpcy5ldmVudHNbZXZOYW1lXS5wdXNoKGZuKTtcbiAgfSxcbiAgdW5zdWJzY3JpYmUoZXZOYW1lLCBmbikge1xuICAgIGNvbnNvbGUubG9nKGBQVUJTVUI6IHNvbWVvbmUganVzdCBVTnN1YnNjcmliZWQgZnJvbSAke2V2TmFtZX1gKTtcbiAgICAvLyByZW1vdmUgYW4gZXZlbnQgZnVuY3Rpb24gYnkgbmFtZVxuICAgIGlmICh0aGlzLmV2ZW50c1tldk5hbWVdKSB7XG4gICAgICB0aGlzLmV2ZW50c1tldk5hbWVdID0gdGhpcy5ldmVudHNbZXZOYW1lXS5maWx0ZXIoKGYpID0+IGYgIT09IGZuKTtcbiAgICB9XG4gIH0sXG4gIHB1Ymxpc2goZXZOYW1lLCBkYXRhKSB7XG4gICAgY29uc29sZS5sb2coYFBVQlNVQjogTWFraW5nIGFuIGJyb2FkY2FzdCBhYm91dCAke2V2TmFtZX0gd2l0aCAke2RhdGF9YCk7XG4gICAgLy8gZW1pdHxwdWJsaXNofGFubm91bmNlIHRoZSBldmVudCB0byBhbnlvbmUgd2hvIGlzIHN1YnNjcmliZWRcbiAgICBpZiAodGhpcy5ldmVudHNbZXZOYW1lXSkge1xuICAgICAgdGhpcy5ldmVudHNbZXZOYW1lXS5mb3JFYWNoKChmKSA9PiB7XG4gICAgICAgIGYoZGF0YSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG59O1xuIiwiaW1wb3J0IHsgcHVic3ViIH0gZnJvbSBcIi4vcHVic3ViLmpzXCI7XG5pbXBvcnQgeyBhcGlDb250cm9sbGVyIH0gZnJvbSAnLi9hcGknXG5cblxuXG5jb25zdCBsaWJzID0ge1xuICAgIGdldEZvcm1EYXRhKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGV2ZW50LnRhcmdldCk7XG4gICAgICAgIGNvbnN0IGZvcm1Qcm9wcyA9IE9iamVjdC5mcm9tRW50cmllcyhmb3JtRGF0YSk7XG4gICAgICAgIHJldHVybiBmb3JtUHJvcHM7XG4gICAgfVxufVxuXG5jb25zdCBhcHAgPSAoZnVuY3Rpb24gKCkge1xuXG4gICAgY29uc3QgcXVlcnlBcGkgPSBhc3luYyAocXVlcnkpID0+IHtcbiAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCBhcGlDb250cm9sbGVyKCkuY2l0eVdlYXRoZXIocXVlcnkpXG4gICAgICAgIHB1YnN1Yi5wdWJsaXNoKCdjaXR5RGF0YVJldHVybmVkJywgZGF0YSlcbiAgICB9XG5cbiAgICBwdWJzdWIuc3Vic2NyaWJlKCdjaXR5U2VhcmNoJywgcXVlcnlBcGkpXG5cblxufSkoKVxuXG5cbmNvbnN0IGRvbSA9IChmdW5jdGlvbiAoKSB7XG5cbiAgICBsZXQgaDEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaDEnKVxuICAgIGxldCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0nKVxuXG5cbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBsZXQgZGF0YSA9IGxpYnMuZ2V0Rm9ybURhdGEoZSlcbiAgICAgICAgcHVic3ViLnB1Ymxpc2goJ2NpdHlTZWFyY2gnLCBkYXRhLmNpdHlTZWFyY2gpXG4gICAgfSlcblxuICAgIGxldCByZW5kZXJDYXJkID0gKHsgbmFtZSwgd2VhdGhlciwgbWFpbiwgd2luZCB9KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKG5hbWUpO1xuICAgICAgICBjb25zb2xlLmxvZyh3ZWF0aGVyKTtcbiAgICAgICAgY29uc29sZS5sb2cobWFpbik7XG4gICAgICAgIGNvbnNvbGUubG9nKHdpbmQpO1xuICAgIH1cblxuICAgIHB1YnN1Yi5zdWJzY3JpYmUoJ2NpdHlEYXRhUmV0dXJuZWQnLCByZW5kZXJDYXJkKVxuXG5cbn0pKClcbiIsImltcG9ydCB7IGRiIH0gZnJvbSBcIi4vZGJcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGFwaUNvbnRyb2xsZXIoKSB7XG4gIC8vTGlua3MgYW5kIGtleXNcbiAgbGV0IGFwaUtleSA9IGRiLmtleTtcblxuICBsZXQgYXBpRmV0Y2hlciA9IGFzeW5jIChsaW5rLCBrZXkpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc29sZS5sb2coXCJBUEkgRmV0Y2hlciBoYXMgZmlyZWRcIik7XG4gICAgICBjb25zdCBwcm9taXNlID0gYXdhaXQgZmV0Y2goYCR7bGlua30ke2tleX1gKTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBwcm9taXNlLmpzb24oKTtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICByZXR1cm4gXCJFUlJPUlwiO1xuICAgIH1cbiAgfTtcblxuICBsZXQgZ2VvRmV0Y2hlciA9IGFzeW5jIChjaXR5KSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJHRU8gRmV0Y2hlciBoYXMgZmlyZWRcIik7XG4gICAgbGV0IGdlb0FwaSA9IGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7Y2l0eX0mYXBwaWQ9YDtcbiAgICByZXR1cm4gYXBpRmV0Y2hlcihnZW9BcGksIGFwaUtleSk7XG4gIH07XG5cbiAgbGV0IHdlYXRoZXJGZXRjaGVyID0gYXN5bmMgKGNvcmRzKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJXZWF0aGVyIEZldGNoZXIgaGFzIGZpcmVkXCIpO1xuICAgIGxldCB3ZWF0aGVyQXBpID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP2xhdD0ke2NvcmRzLmxhdH0mJmxvbj0ke2NvcmRzLmxvbn0mYXBwaWQ9YDtcbiAgICByZXR1cm4gYXBpRmV0Y2hlcih3ZWF0aGVyQXBpLCBhcGlLZXkpO1xuICB9O1xuXG4gIGxldCBjaXR5V2VhdGhlciA9IGFzeW5jIChjaXR5KSA9PiB7XG5cbiAgICBjb25zdCBjaXR5RGF0YSA9IGF3YWl0IGdlb0ZldGNoZXIoY2l0eSk7XG4gICAgY29uc3QgY2l0eUNvcmRzID0geyBsYXQ6IGNpdHlEYXRhWzBdLmxhdCwgbG9uOiBjaXR5RGF0YVswXS5sb24gfTtcblxuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgd2VhdGhlckZldGNoZXIoY2l0eUNvcmRzKTtcbiAgICByZXR1cm4gd2VhdGhlckRhdGE7XG4gIH07XG5cbiAgcmV0dXJuIHsgY2l0eVdlYXRoZXIgfTtcbn1cbiIsImV4cG9ydCBjb25zdCBkYiA9IHtcbiAga2V5OiBcIjgyZGJmNzgxYTk1YzdiMDFhMTZkN2ZkYWFmMWI1NTJjXCIsXG59O1xuIl0sIm5hbWVzIjpbInB1YnN1YiIsImV2ZW50cyIsInN1YnNjcmliZSIsImV2TmFtZSIsImZuIiwiY29uc29sZSIsImxvZyIsInRoaXMiLCJwdXNoIiwidW5zdWJzY3JpYmUiLCJmaWx0ZXIiLCJmIiwicHVibGlzaCIsImRhdGEiLCJmb3JFYWNoIiwibGlicyIsImdldEZvcm1EYXRhIiwiZXZlbnQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwidGFyZ2V0IiwiT2JqZWN0IiwiZnJvbUVudHJpZXMiLCJhc3luYyIsInF1ZXJ5IiwiYXBpS2V5IiwiYXBpRmV0Y2hlciIsImxpbmsiLCJrZXkiLCJwcm9taXNlIiwiZmV0Y2giLCJqc29uIiwiZXJyb3IiLCJjaXR5V2VhdGhlciIsImNpdHkiLCJjaXR5RGF0YSIsImdlb0ZldGNoZXIiLCJjaXR5Q29yZHMiLCJsYXQiLCJsb24iLCJjb3JkcyIsIndlYXRoZXJGZXRjaGVyIiwiYXBpQ29udHJvbGxlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY2l0eVNlYXJjaCIsIm5hbWUiLCJ3ZWF0aGVyIiwibWFpbiIsIndpbmQiXSwic291cmNlUm9vdCI6IiJ9
