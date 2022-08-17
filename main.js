(() => {
  "use strict";
  (function () {
    let e = "82dbf781a95c7b01a16d7fdaaf1b552c",
      t = async (e, t) => {
        try {
          console.log("API Fetcher has fired");
          const o = await fetch(`${e}${t}`);
          return await o.json();
        } catch (e) {
          return console.log(e), "ERROR";
        }
      };
    return {
      cityWeather: async (o) => {
        try {
          console.log("CityWeather has fired");
          const a = await (async (o) => {
              try {
                return (
                  console.log("GEO Fetcher has fired"),
                  t(
                    `http://api.openweathermap.org/geo/1.0/direct?q=${o}&appid=`,
                    e
                  )
                );
              } catch (e) {
                return console.log(e), "ERROR";
              }
            })(o),
            r = { lat: a[0].lat, lon: a[0].lon },
            n = await (async (o) => {
              try {
                console.log("Weather Fetcher has fired");
                let a = `https://api.openweathermap.org/data/2.5/weather?lat=${o.lat}&&lon=${o.lon}&appid=`;
                return t(a, e);
              } catch (e) {
                return console.log(e), "ERROR";
              }
            })(r);
          return console.log("data is:"), console.log(n), n;
        } catch (e) {
          return console.log(e), "ERROR";
        }
      },
    };
  })()
    .cityWeather("London")
    .then((e) => console.log(e.name));
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoib0JBRU8sV0FFSCxJQUFJQSxFQ0hELG1DREtDQyxFQUFhQyxNQUFPQyxFQUFNQyxLQUMxQixJQUNJQyxRQUFRQyxJQUFJLHlCQUNaLE1BQU1DLFFBQWdCQyxNQUFNLEdBQUdMLElBQU9DLEtBRXRDLGFBRG1CRyxFQUFRRSxNQUsvQixDQUhFLE1BQU9DLEdBRUwsT0FEQUwsUUFBUUMsSUFBSUksR0FDTCxPQUNYLEdBeUNKLE1BQU8sQ0FBRUMsWUFoQlNULE1BQU9VLElBQ3JCLElBQ0lQLFFBQVFDLElBQUkseUJBQ1osTUFBTU8sT0F6QkdYLE9BQU9VLElBQ3BCLElBR0ksT0FGQVAsUUFBUUMsSUFBSSx5QkFFTEwsRUFETSxrREFBa0RXLFdBQ3JDWixFQUk5QixDQUhFLE1BQU9VLEdBRUwsT0FEQUwsUUFBUUMsSUFBSUksR0FDTCxPQUNYLEdBaUIyQkksQ0FBV0YsR0FDNUJHLEVBQVksQ0FBRUMsSUFBS0gsRUFBUyxHQUFHRyxJQUFLQyxJQUFLSixFQUFTLEdBQUdJLEtBRXJEQyxPQWpCT2hCLE9BQU9pQixJQUN4QixJQUNJZCxRQUFRQyxJQUFJLDZCQUNaLElBQUljLEVBQWEsdURBQXVERCxFQUFNSCxZQUFZRyxFQUFNRixhQUNoRyxPQUFPaEIsRUFBV21CLEVBQVlwQixFQUlsQyxDQUhFLE1BQU9VLEdBRUwsT0FEQUwsUUFBUUMsSUFBSUksR0FDTCxPQUNYLEdBUzhCVyxDQUFlTixHQUd6QyxPQUZBVixRQUFRQyxJQUFJLFlBQ1pELFFBQVFDLElBQUlZLEdBQ0xBLENBSVgsQ0FIRSxNQUFPUixHQUVMLE9BREFMLFFBQVFDLElBQUlJLEdBQ0wsT0FDWCxHQUlSLEVFdkRBWSxHQUFnQlgsWUFBWSxVQUFVWSxNQUFLQyxHQUFRbkIsUUFBUUMsSUFBSWtCLEVBQUtDLE8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2pzL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2pzL2RiLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi9kYlwiO1xuXG5leHBvcnQgZnVuY3Rpb24gYXBpQ29udHJvbGxlcigpIHtcbiAgICAvL0xpbmtzIGFuZCBrZXlzXG4gICAgbGV0IGFwaUtleSA9IGRiLmtleTtcblxuICAgIGxldCBhcGlGZXRjaGVyID0gYXN5bmMgKGxpbmssIGtleSkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0FQSSBGZXRjaGVyIGhhcyBmaXJlZCcpO1xuICAgICAgICAgICAgY29uc3QgcHJvbWlzZSA9IGF3YWl0IGZldGNoKGAke2xpbmt9JHtrZXl9YCk7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcHJvbWlzZS5qc29uKCk7XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiBcIkVSUk9SXCI7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgbGV0IGdlb0ZldGNoZXIgPSBhc3luYyAoY2l0eSkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0dFTyBGZXRjaGVyIGhhcyBmaXJlZCcpO1xuICAgICAgICAgICAgbGV0IGdlb0FwaSA9IGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7Y2l0eX0mYXBwaWQ9YDtcbiAgICAgICAgICAgIHJldHVybiBhcGlGZXRjaGVyKGdlb0FwaSwgYXBpS2V5KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiBcIkVSUk9SXCI7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgbGV0IHdlYXRoZXJGZXRjaGVyID0gYXN5bmMgKGNvcmRzKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnV2VhdGhlciBGZXRjaGVyIGhhcyBmaXJlZCcpO1xuICAgICAgICAgICAgbGV0IHdlYXRoZXJBcGkgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/bGF0PSR7Y29yZHMubGF0fSYmbG9uPSR7Y29yZHMubG9ufSZhcHBpZD1gO1xuICAgICAgICAgICAgcmV0dXJuIGFwaUZldGNoZXIod2VhdGhlckFwaSwgYXBpS2V5KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiBcIkVSUk9SXCI7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgbGV0IGNpdHlXZWF0aGVyID0gYXN5bmMgKGNpdHkpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDaXR5V2VhdGhlciBoYXMgZmlyZWQnKTtcbiAgICAgICAgICAgIGNvbnN0IGNpdHlEYXRhID0gYXdhaXQgZ2VvRmV0Y2hlcihjaXR5KTtcbiAgICAgICAgICAgIGNvbnN0IGNpdHlDb3JkcyA9IHsgbGF0OiBjaXR5RGF0YVswXS5sYXQsIGxvbjogY2l0eURhdGFbMF0ubG9uIH07XG5cbiAgICAgICAgICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgd2VhdGhlckZldGNoZXIoY2l0eUNvcmRzKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkYXRhIGlzOicpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cod2VhdGhlckRhdGEpXG4gICAgICAgICAgICByZXR1cm4gd2VhdGhlckRhdGE7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gXCJFUlJPUlwiO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiB7IGNpdHlXZWF0aGVyIH07XG59O1xuXG5cbiIsImV4cG9ydCBjb25zdCBkYiA9IHtcbiAga2V5OiBcIjgyZGJmNzgxYTk1YzdiMDFhMTZkN2ZkYWFmMWI1NTJjXCIsXG59O1xuIiwiaW1wb3J0IHsgYXBpQ29udHJvbGxlciB9IGZyb20gXCIuL2FwaVwiO1xuXG5hcGlDb250cm9sbGVyKCkuY2l0eVdlYXRoZXIoJ0xvbmRvbicpLnRoZW4oZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhLm5hbWUpKSJdLCJuYW1lcyI6WyJhcGlLZXkiLCJhcGlGZXRjaGVyIiwiYXN5bmMiLCJsaW5rIiwia2V5IiwiY29uc29sZSIsImxvZyIsInByb21pc2UiLCJmZXRjaCIsImpzb24iLCJlcnJvciIsImNpdHlXZWF0aGVyIiwiY2l0eSIsImNpdHlEYXRhIiwiZ2VvRmV0Y2hlciIsImNpdHlDb3JkcyIsImxhdCIsImxvbiIsIndlYXRoZXJEYXRhIiwiY29yZHMiLCJ3ZWF0aGVyQXBpIiwid2VhdGhlckZldGNoZXIiLCJhcGlDb250cm9sbGVyIiwidGhlbiIsImRhdGEiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==
